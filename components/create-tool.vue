<template>
    <div>
        <v-card-text v-if="!item.type"> <!-- Çoklu Seçmeli -->
            <v-text-field
                label="Şıklar"
                outlined
                append-outer-icon="mdi-plus"
                @click:append-outer="addOption(i)"
            ></v-text-field>
        </v-card-text>
        <v-card-text v-else> <!-- Açık uçlı -->
            <v-text-field outlined v-model="placeholder" label="Örnek"></v-text-field>
        </v-card-text>
    </div>
</template>
<script>
export default{
    props:["item"],
    data(){
        return{
            placeholder:""
        }
    },
    methods:{
        addOption(i){
            this.surveyInfo[i-1].options.push("")
        }
    },
    watch:{
        placeholder(){
            
        }
    }
}
</script>

<style lang='scss' scoped>
    
</style>