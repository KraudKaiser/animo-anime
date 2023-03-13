<template>
			<v-card elevation="3" class="d-flex flex-column justify-center align-center pa-5"  width="auto" max-width="350" height="auto" max-height="600">
				<v-img :src="anime.thumbnail" weight="300" width="250" contain ></v-img>
				<v-card-title>{{ anime.title }}</v-card-title>
				<v-card-subtitle>{{ anime.category.name}}</v-card-subtitle>
				<v-card-actions class="d-flex justify-space-around">
					<v-btn :to="`/anime/${anime._id}`" text>Ver más</v-btn>
					<v-icon
					@click="toggleLike(index)"
					:class="{ 'red--text': isLiked }"
					>
					{{ isLiked ? 'mdi-heart' : 'mdi-heart-outline' }}
				</v-icon>
			</v-card-actions>
		</v-card>
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
		toggleLike(){
			this.isLiked = !this.isLiked
			this.fetchLike({like: this.isLiked, index: this.index})
		}
	},

	created() {
		if(this.anime.likes[this.anime.likes.indexOf(this.user._id)] === this.user._id){
			this.isLiked = true
		}else{
			this.isLiked = false
		}
	},
  };
  </script>
