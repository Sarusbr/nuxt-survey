<template>
    <v-app>
        <v-app-bar app color="primary">
            <v-app-bar-title class="white--text title">
                <div>
                    {{ $store.state.title }}
                </div>
            </v-app-bar-title>
        </v-app-bar>
        <v-main>
            <v-container>
                <nuxt></nuxt>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>