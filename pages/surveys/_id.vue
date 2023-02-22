<template>
    <div>
        <v-card elevation="0">
            <v-card-title>
                <div>{{ survey.title }}</div>
            </v-card-title>
            <v-card-text>
                {{ survey.description }}
                <v-divider></v-divider>
            </v-card-text>
        </v-card>
        <v-card class="mb-9" v-for="item,i in survey.questions" :key="i">
            <v-card-title>
                {{ item.question }}
            </v-card-title>
            <v-card-text v-if="item.type == 1">
                <v-textarea v-model="result.find(e=>e.id == item.id).value" outlined :placeholder="item.placeholder"></v-textarea>
            </v-card-text>
            <v-card-text v-else>
                <v-list>
                    <v-list-item-group color="primary" v-model="result.find(e=>e.id == item.id).value">
                        <v-list-item class="bg" v-for="option,index in item.options" :value="option" :key="index">
                            {{ option }}
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card-text>
        </v-card>
        <v-card-title>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="sendResult">Anketi bitir</v-btn>
        </v-card-title>
    </div>
  </template>
    
<script>
export default{
    async asyncData({$axios,params}){
        const survey = await $axios.$get("/surveys/"+params.id)
        console.log(survey)
        const result = survey.questions.map(item=>{
            return{
                value:"",
                id:item.id
            }
        })
        return{
            survey,
            result
        }
    },
    created(){
        this.$store.commit("setTitle",this.survey.title)
        this.$store.commit("setDescription",this.survey.description)
    },
    methods:{
        async sendResult(){
            const res = await this.$axios.$patch("/surveys/"+this.survey.id,this.result)
            console.log(res);
        }
    }
}
</script>