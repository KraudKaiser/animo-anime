<template>
	<v-app>
		<app-bar></app-bar>
		<v-main class="grey lighten-3" v-if="animes.length !== 0">	
		<v-container class="d-flex flex-column justify-center">
				<h1>Nuestro Catalogo Completo</h1>
				<v-sheet class="d-flex">
					<AnimeList/>
				</v-sheet>
			</v-container>
		</v-main>
		<v-main v-else class="grey lighten-3 pa-5">
			<v-sheet class="d-flex justify-center">
				<h1>No hay animes ni categorias para mostrar</h1>
			</v-sheet>
		</v-main>
	</v-app>
  </template>
  
  <script>
  import AnimeList from '@/components/AnimeList.vue';
  import AppBar from '@/components/AppBar.vue';
  import { mapState } from 'vuex';
  export default {

	computed:{
		...mapState(["animes"])
	},
	components: {
	  AnimeList,
	  AppBar
	},
	

  };
  </script>
  