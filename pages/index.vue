<template>
    <v-list>
      <v-list-item @click="run(item)" :style="style" class="rounded-lg my-5" two-line v-for="item,i in surveys" :key="i">
        <v-list-item-content >
            <v-list-item-title>
                {{ item.title }}
            </v-list-item-title>
            <v-list-item-subtitle>
                {{ item.description }}
            </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </template>
    
<script>
export default{
    data(){
        return{
            style:{
                boxShadow:'1px 1px 5px rgba(0,0,0,0.2)',
                cursor:"pointer"
            }
        }
    },
    async asyncData({ $axios }) {
        const surveys = await $axios.$get('/surveys')
        return { surveys }
    },
    methods:{
        run(item){
            this.$router.push("/surveys/"+item.id)
        }
    },
    created(){
        this.$store.commit("setTitle",'Anketler')
        if(process.client){
            console.log(this.surveys)
        }
    }
}
</script>