<template>
    <v-app>
        <v-main>
            <app-bar></app-bar>
            <v-container v-if="searchResults.length !== 0">
                <h1>Estos son los resultados:</h1>
                <v-sheet >
                    <anime-card :key="anime._id" v-for="(anime, index) in searchResults" :anime="anime" :index="index" ></anime-card>
                </v-sheet>
                </v-container>
                <v-container v-else>
                    <h2>Ups, parece que el anime que buscas no se encuentra disponible</h2>
                </v-container>
        </v-main>
        </v-app>
  </template>
  
  <script>
  import AppBar from '@/components/AppBar.vue';
  import AnimeCard from '@/components/AnimeCard.vue';
  import { mapGetters } from 'vuex'
  
  export default {
    components:{
        AppBar,
        AnimeCard
    },
    props: ['query'],
    computed: {
      ...mapGetters(['searchResults'])
    },
    created() {
      this.$store.dispatch('fetchSearchAnime', this.query)
    }
  }
  </script>