<template>
  <v-app id="inspire">
    <app-bar></app-bar>
    <v-main class="grey lighten-3">
        <v-sheet class="pa-3">
            <h1 class="pa-3">{{anime.title }}</h1>
            <v-sheet class="d-flex justify-space-around" >
                <v-sheet>
                    <v-img :src="anime.thumbnail" height="500" width="100%" float="right" contain></v-img>
                </v-sheet>
                <v-sheet class="d-flex flex-column justify-center align-self-center ma-5"  >
                    <h2 >Descripcion: {{ anime.description }}</h2><p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus id explicabo ut iste labore ipsam, laborum ab, sed dolore dolores autem porro. Dolorem exercitationem aperiam officia ea suscipit, autem quibusdam!</p>
                    <h2>Likes: {{ anime.likes.length }}</h2>
                    <h2>Categoria: {{ anime.category.name }}</h2>
                </v-sheet>
                </v-sheet>
                <v-sheet class="d-flex flex-column justify-center pa-5 ma-5">
                    <h1 class="d-flex justify-center">Episodios</h1>
                    <v-sheet class="d-flex pa-5 justify-center">
                <v-card class="pa-6" :key="chapter._id" v-for="(chapter, index) in anime.chapters">
                    <v-img :src="anime.thumbnail" height="150px" width="200px"></v-img>
                    <v-card-title>{{`Capitulo ${index + 1}` }}</v-card-title>
            </v-card>
        </v-sheet>
    </v-sheet>
    -
    <v-sheet>
    <anime-comment :anime="anime"></anime-comment>
</v-sheet>
</v-sheet>

</v-main>
</v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import { mapGetters } from 'vuex';
import AnimeComment from '@/components/AnimeComment.vue';
export default {
    components:{
        AppBar,
        AnimeComment
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

