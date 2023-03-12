<template>
  <v-app id="inspire">
    <app-bar></app-bar>
    <v-main class="grey lighten-3">
        <v-sheet class="pa-3">
            <h1>{{anime.title }}</h1>
            <v-card :key="index" v-for="(chapter, index) in anime.chapters">
            <h1>{{ `Capitulo ${index + 1}` }}</h1>
            <v-card-content>{{  }}</v-card-content>
            </v-card>
        </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import { mapGetters } from 'vuex';
export default {
    components:{
        AppBar
    },
    methods:{

        
    },
    computed:{
        ...mapGetters(["getAnimeById"]),
        anime(){
            return this.getAnimeById(this.$router.history.current.params.name)
        }
    },
    created(){
         getAnimeById(this.$router.history.current.params.name)
    }
}
</script>

