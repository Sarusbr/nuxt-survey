<template>
    <v-list>
      <v-list-item @click="run" :style="style" class="rounded-lg my-5" two-line v-for="item in 20" :key="item">
        <v-list-item-content >
            <v-list-item-title>
                Lorem ipsum dolor sit.
            </v-list-item-title>
            <v-list-item-subtitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
    methods:{
        run(){
            //this.$axios.$post("/api/surveys")
        }
    }
}
</script>