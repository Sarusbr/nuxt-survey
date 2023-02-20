<template>
    <div>
        <v-card v-for="item,i in asd" class="my-5" elevation="2">
            <v-card-title>
                Lorem ipsum dolor sit amet.
            </v-card-title>

            <v-card-text>

                <chart v-if="i%2==0" :options="options"></chart>

                <v-window v-else v-model="item.step">

                    <v-window-item v-for="item2 in 8" :value="item2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, voluptatum labore modi veniam doloribus ea, qui deleniti minima voluptas deserunt accusantium provident, saepe perferendis veritatis magnam laudantium! Aliquid, officiis quaerat fugiat dolorum laudantium sint consequuntur itaque earum unde eligendi? Amet fugit quasi suscipit maiores maxime magnam, impedit dolorem cumque voluptatibus.
                    </v-window-item>

                </v-window>

            </v-card-text>

            <v-card-actions v-if="i%2!=0">
                <v-btn
                    :disabled="item.step == 1"
                    text
                    @click="item.step--"
                >
                    Back
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
                    Next
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
            asd: []
        }
    },
    created(){
        this.$store.state.title = this.$route.params.id;
        for (let i = 0; i < 20; i++) {
            this.asd.push({
                step:1
            })
        }
    }
}
</script>

<style lang="scss">

</style>