<template>
	<v-app>
		<app-bar></app-bar>
		<v-main class="grey lighten-3">
      <v-container class="d-flex justify-center flex-column">
			<v-sheet class="d-flex justify-center flex-column">
    <h1 class="d-flex justify-center">{{ user.name }}</h1>
    <h2 class="d-flex justify-center">{{ user.email }}</h2>

    <v-list class="pa-5 d-flex flex-column">
    <h3>Animes favoritos</h3>
	<v-row class="d-flex justify-center">
		<v-col class="d-flex justify-center"><h2>Anime</h2></v-col>
		<v-col class="d-flex justify-center"><h2>Categoria</h2></v-col>
	</v-row>
	<v-row>
		<v-list-item
		v-for="(anime, index) in animes"
		:key="index"
		class="d-flex"
		>
		<v-col>
			<v-list-item-title class="d-flex justify-center"  >{{ anime.title }}</v-list-item-title>
		</v-col>
		<v-col>
			<v-list-item-subtitle class="d-flex justify-center">{{ anime.category.name }}</v-list-item-subtitle>
		</v-col>
		
	</v-list-item>
</v-row>
    </v-list>
  </v-sheet>
  <v-sheet>
    <v-container>
      <h3>Tus Comentarios</h3>
      <v-list>
          <v-list-item :key="comment._id" v-for="comment in user.comments" >
            <v-list-item-title>
              {{ comment.comment }}
            </v-list-item-title>
            <v-list-item-subtitle>{{getAnimeTitle(comment.anime) }}</v-list-item-subtitle>
            <v-list-item-subtitle>
            <v-rating readonly :value="getCommentRating(comment.anime)"></v-rating>  
            </v-list-item-subtitle>
          </v-list-item>
      </v-list>
    </v-container>

  </v-sheet>
</v-container>
</v-main>
</v-app>
</template>
<script>
import AppBar from '@/components/AppBar.vue';
import { mapState , mapMutations, } from 'vuex';

export default {
	
	components:{
		AppBar
	},


  computed: {
    ...mapState(['user', "animes"]),
  },
  methods: {
	...mapMutations(["toggleLike"]),
  getAnimeTitle(animeId) {
    const anime = this.animes.find(anime => anime._id === animeId);
    return anime ? anime.title : '';
  },
  getCommentRating(animeId){
    const anime = this.animes.find(anime => anime._id === animeId);
    const comment = anime.comments.find(comment => comment.author === this.user.name)
    return comment ? comment.rating : ""
  }
 
}

}
</script>