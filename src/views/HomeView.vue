<template>
	<v-app id="inspire">
		
		<app-bar></app-bar>
		<v-main class="grey lighten-3">
		<v-container>
			<top-populars></top-populars>
			<v-sheet>
				<anime-sheet></anime-sheet>		
			</v-sheet>
	</v-container>
		</v-main>
	</v-app>
	</template>
	
	<script>
	import AppBar from "../components/AppBar.vue"
	import AnimeSheet from "../components/AnimeSheet.vue"
	import TopPopulars from '@/components/TopPopulars'
	export default {
		components:{
			AppBar,
			AnimeSheet,
			TopPopulars
		}
	}
</script>