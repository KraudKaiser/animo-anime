<template>
	<v-app id="inspire">
		
		<app-bar></app-bar>
		<v-main class="grey lighten-3" v-if="animes.length !== 0">
		<v-container class="d-flex flex-column justify-center align-center">
			<h1> ¡Mira nuestros nuevos añadidos!</h1>
			<v-sheet class="d-inline-flex ma-5" width="100%">
				<anime-sheet></anime-sheet>		
			</v-sheet>
	</v-container>
</v-main>

	<v-main class="grey lighten-3 pa-5"  v-else>
		<v-sheet class="d-flex justify-center">
			<v-container class="d-flex flex-column justify-center align-center">
				<h1 >Ups, parece que aun no esta disponible nuestro catalogo de animes </h1>
			</v-container>
		</v-sheet>
		</v-main>
	</v-app>
	</template>
	
	<script>
	import AppBar from "../components/AppBar.vue"
	import AnimeSheet from "../components/AnimeSheet.vue"
	import {mapState, mapActions} from "vuex"
	export default {
		components:{
			AppBar,
			AnimeSheet,
		},

		computed:{
			...mapState(["animes"])
		}
	}
</script>