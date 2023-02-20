<template>
    <div>
        {{$t("welcome")}}
        <v-btn @click="yolla">Yolla</v-btn>
    </div>
</template>

<script>
export default {
    methods:{
        yolla(){
            this.$axios.$get("http://localhost:3000/api/asd")
        }
    }
}
</script>

<style>

</style>