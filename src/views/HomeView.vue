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
			TopPopulars,
			
		},
		data(){
			return{
				movies:[
					{
						title:"pelicula 1",
						description:"descripcion de la pelicula 1",
						poster:"https://via.placeholder.com/300x400?text=Pelicula+1"
					}
				]
			}
		}
	}
</script>