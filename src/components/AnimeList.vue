<template>
	<v-container>
	  <v-row>
		<v-col
		  v-for="anime in animes"
		  :key="anime.id"
		  cols="12"
		  sm="6"
		  md="4"
		  lg="3"
		>
		  <v-card>
			<v-img :src="anime.posterUrl" height="400px"></v-img>
			<v-card-title>{{ anime.title }}</v-card-title>
			<v-card-subtitle>{{ anime.genre }}</v-card-subtitle>
			<v-card-actions>
			  <v-btn text>Ver más</v-btn>
			  <v-btn text>Agregar a favoritos</v-btn>
			</v-card-actions>
		  </v-card>
		</v-col>
	  </v-row>
	</v-container>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
	computed: {
	  ...mapState(['animes']),
	},
  
	created() {
	  // Aquí puedes enviar una solicitud al servidor para obtener la lista de animes.
	  // Luego, actualiza el estado de Vuex usando la mutación SET_ANIMES.
	},
  };
  </script>
  