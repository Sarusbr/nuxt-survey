<template>
    <div>
        <v-card v-for="item,i in res.questions" :key="i" class="my-5" elevation="2">
            <v-card-title>
                Lorem ipsum dolor sit amet.
            </v-card-title>

            <v-card-text>

                <chart v-if="item.type == 0" :options="options"></chart>

                <v-window v-else v-model="item.step">

                    <v-window-item v-for="item2,i in 8" :key="i" :value="item2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, voluptatum labore modi veniam doloribus ea, qui deleniti minima voluptas deserunt accusantium provident, saepe perferendis veritatis magnam laudantium! Aliquid, officiis quaerat fugiat dolorum laudantium sint consequuntur itaque earum unde eligendi? Amet fugit quasi suscipit maiores maxime magnam, impedit dolorem cumque voluptatibus.
                    </v-window-item>

                </v-window>

            </v-card-text>

            <v-card-actions v-if="item.type == 1">
                <v-btn
                    :disabled="item.step == 1"
                    text
                    @click="item.step--"
                >
                    Önceki
                </v-btn>
                <v-spacer></v-spacer>
                <div>{{ item.step }} / 8</div>
                <v-spacer></v-spacer>
                <v-btn
                    :disabled="item.step == 8"
                    color="primary"
                    depressed
                    @click="item.step++"
                >
                    Sonraki
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default{
    data(){
        return{
            options:{
                data:[
                    { value: 1, name: 'Aile' },
                    { value: 5, name: 'Yaşam' },
                    { value: 7, name: 'Geçimsizlik' },
                    { value: 12, name: 'Sevgi' },
                    { value: 3, name: 'Şiddet' },
                    { value: 2, name: 'Ekonomi' },
                ],
                style:{
                    height:"250px"
                },
                step:1
            },
        }
    },
    async asyncData({$axios,params}){
        const res = await $axios.$get("/surveys/"+params.id)
        console.log(res.questions)
        res.questions = res.questions.map(item=>{
            if(item.type == 0){
                return{
                    type:item.type,
                    question:item.question,
                    options:item.options,
                    id:item.id
                }
            }
            return{
                
            }
        })
        return{
            res
        }
    },
    created(){
        this.$store.commit("setTitle",this.$route.params.id)
        /* for (let i = 0; i < 20; i++) {
            this.asd.push({
                step:1
            })
        } */
    }
}
</script>

<style lang="scss">

</style>