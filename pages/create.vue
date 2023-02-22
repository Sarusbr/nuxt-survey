<template>
    <div class="createContainer">
        <v-card class="my-9">
            <v-card-title>
                Anket Bilgileri
            </v-card-title>
            <v-card-text>
                <v-text-field v-model="surveyInfo.title" label="Başlık" outlined></v-text-field>
                <v-text-field v-model="surveyInfo.description" label="Açıklama" outlined></v-text-field>
            </v-card-text>
        </v-card>
        <v-card v-for="item,i in surveyInfo.questions" :key="i" class="my-9 rounded-lg" elevation="4">
            <v-card-title>
                <v-tabs v-model="item.type">
                    <div class="align-center d-flex">
                        Soru {{ i+1 }}
                    </div>
                    <v-spacer></v-spacer>
                    <v-tab>Çoktan Seçmeli</v-tab>
                    <v-tab>Açık uçlu</v-tab>
                </v-tabs>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-text-field outlined v-model="item.question" label="Soru"></v-text-field>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text v-if="!item.type"> <!-- Çoklu Seçmeli -->
                <v-text-field
                    label="Şıklar"
                    outlined
                    append-outer-icon="mdi-plus"
                    v-model="item.text"
                    @keydown.enter="item.options.push(item.text);item.text=''"
                    @click:append-outer="item.options.push(item.text);item.text=''"
                ></v-text-field>
            </v-card-text>
            <v-card-text v-else> <!-- Açık uçlı -->
                <v-text-field outlined v-model="item.placeholder" label="Örnek"></v-text-field>
            </v-card-text>
            <v-divider v-if="item.type == 0 && item.options?.length != 0"></v-divider>
            <v-card-text v-if="item.type == 0 && item.options?.length != 0">
                <v-list>
                    <v-list-item v-for="optionName,i2 in item?.options" :key="i2">
                        {{ optionName }}
                        <v-spacer></v-spacer>
                        <v-list-item-action>
                            <v-btn icon @click="removeOption(i,i2)">
                                <v-icon color="red">mdi-delete</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="removeQuestion(i)" color="red" small class="white--text">Sil</v-btn>
            </v-card-actions>
        </v-card>
        <v-card elevation="4">
            <v-card-title>
                <v-btn @click="addQuestion" color="primary">Soru Ekle</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="success" :disable="loading" :loading="loading" @click="createSurvey">Anketi oluştur</v-btn>
            </v-card-title>
        </v-card>
    </div>
</template>
<script>
export default{
    data(){
        return{
            surveyInfo:{
                title:"",
                description:"",
                questions:[
                    {
                        type:0,
                        text:"",
                        question:"",
                        options:[],
                        placeholder:""
                    },
                ]
            },
            loading:false,
        }
    },
    methods:{
        removeOption(i,i2){
            this.surveyInfo.questions[i].options.splice(i2,1);
        },
        removeQuestion(i){
            this.surveyInfo.questions.splice(i,1)
        },
        addQuestion(){
            this.surveyInfo.questions.push({
                type:0,
                text:"",
                question:"",
                options:[],
                placeholder:""
            })
        },
        async createSurvey(){
            this.loading = true;
            const data = {...this.surveyInfo};
            data.questions = this.surveyInfo.questions.map(item =>{
                return {
                    type: item.type,
                    question : item.question,
                    ...(item.type == 0 ? {options: {...item.options}} : {placeholder: item.placeholder})
                }
            })
            const res = await this.$axios.$post("/surveys",data)
            console.log(res)
            this.loading = false;
            this.$router.push("/");
        }
    },
}
</script>

<style lang='scss'>
.createContainer{
    max-width: 800px;
    margin: auto;
}
</style>