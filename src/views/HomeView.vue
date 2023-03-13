<template>
	<v-app id="inspire">
		
		<app-bar></app-bar>
		<v-main class="grey lighten-3">
		<v-container class="d-flex flex-column justify-center align-center">
			<h1> ¡Mira nuestros nuevos añadidos!</h1>
			<v-sheet class="d-inline-flex ma-5">
				<anime-sheet></anime-sheet>		
			</v-sheet>
	</v-container>
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

			
		}
	}
</script>