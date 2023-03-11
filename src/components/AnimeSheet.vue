<template>
	
    <v-slide-group
      v-model="model"
      class="py-16"
      active-class="success"
      show-arrows
    >
      <v-slide-item
	  class="mb-16"
        v-for="(anime) in animes"
        :key="anime.id"
		
      >
        <anime-card 
		:title="anime.title"
		:image-url="anime.poster"></anime-card>
      </v-slide-item>
    </v-slide-group>
   
</template>

<script>
import AnimeCard from './AnimeCard.vue';
import {mapState, mapActions} from "vuex"
export default {
	components:{
		AnimeCard
	},
	computed:{
			...mapState(["animes"])
		},
		data(){
			return{
				movies:[
					{
						title:"pelicula 1",
						description:"descripcion de la pelicula 1",
						poster:"https://static.wikia.nocookie.net/deathnote/images/0/05/Death-note-xd.jpg/revision/latest?cb=20110803022625&path-prefix=es"
					}
				]
			}
		},
		mounted(){
			this.fetchAnimes()
		},
		methods:{
			...mapActions(["fetchAnimes"])
		}
	}
</script>
