<template>
	<v-app>
		<app-bar></app-bar>
		<v-main class="">

			<v-container>
				<h1>Directorio de anime</h1>
				<AnimeList />
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
  