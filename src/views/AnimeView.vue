<template>
  <v-app id="inspire">
    <app-bar></app-bar>
    <v-main class="grey lighten-3">
        <v-sheet class="pa-3">
            <h1>{{ anime.title }}</h1>
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
    data(){
        return{
            anime:{
            }
        }
    },
    methods:{
        ...mapGetters(["getAnimeById"])
    },
    created(){
        
    }
}
</script>

