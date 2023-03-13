<template>
	
    <v-slide-group
      v-model="model"
      class="pa-16"
      active-class="success"
      show-arrows
    >
      <v-slide-item
	  class="pa-5 mb-16"
        v-for="(anime, index) in animes"
        :key="anime._id"
		
      >
        <anime-card
		:anime="anime" :index="index"></anime-card>
      </v-slide-item>
    </v-slide-group>
   
</template>

<script>
import AnimeCard from './AnimeCard.vue';
import {mapState} from "vuex"
export default {
	components:{
		AnimeCard
	},
	computed:{
			...mapState(["animes"])
		},
		methods:{
		}
	}
</script>
