<template>
	<v-container>
	  <v-row>
		<v-col
		  v-for="(anime, index) in animes"
		  :key="anime._id"
		  cols="12"
		  sm="6"
		  md="4"
		  lg="3"
		>
		 <anime-card :anime="anime" :index="index"></anime-card>
		</v-col>
	  </v-row>
	</v-container>
  </template>
  
  <script>
  import AnimeCard from "./AnimeCard.vue"
  import { mapState } from "vuex";
  export default {
	components:{
		AnimeCard
	},
	computed: {
		...mapState(["animes"])
  } 
}
  </script>
  