<template>
	<v-app>
		<app-bar></app-bar>
		<v-main class="grey lighten-3">

			
			<v-container class="d-flex flex-column justify-center">
				<h1>Nuestro Catalogo Completo</h1>
				<v-sheet class="d-flex">
					<AnimeList/>
				</v-sheet>
			</v-container>
		</v-main>
	</v-app>
  </template>
  
  <script>
  import AnimeList from '@/components/AnimeList.vue';
  import AppBar from '@/components/AppBar.vue';
  export default {
	components: {
	  AnimeList,
	  AppBar
	},
  };
  </script>
  