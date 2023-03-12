<template>
	<v-container>
			<v-card>
				<v-img :src="anime.imageUrl" height="400px"></v-img>
				<v-card-title>{{ anime.title }}</v-card-title>
				<v-card-subtitle>{{ anime.category.name}}</v-card-subtitle>
				<v-card-actions>
					<v-btn :to="`/anime/${anime._id}`" text>Ver más</v-btn>
					<v-icon
					@click="toggleLike(index)"
					:class="{ 'red--text': isLiked }"
					>
					{{ isLiked ? 'mdi-heart' : 'mdi-heart-outline' }}
				</v-icon>
			</v-card-actions>
		</v-card>
	</v-container>
  </template>
  
  <script>
  import {mapState, mapActions} from "vuex"
  export default {
	name: 'AnimeCard',
	props:{
		anime:{},
		index:Number
	},
	data(){
		return{
			isLiked:null
		}
	},
	computed: {
		...mapState(["user"]),
	},
	methods:{
		...mapActions(["fetchLike"]),
		toggleLike(index){
			this.isLiked = !this.isLiked
			this.fetchLike(this.isLiked,index)
		}
	},

	created() {
		if(this.anime.likes[this.anime.likes.indexOf(this.user._id)] === this.user._id){
			this.isLiked = true
		}else{
			this.isLiked = false
		}
	  // Aquí puedes enviar una solicitud al servidor para obtener la lista de animes.
	  // Luego, actualiza el estado de Vuex usando la mutación SET_ANIMES.
	},
  };
  </script>
