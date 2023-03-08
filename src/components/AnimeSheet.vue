<template>
	
    <v-slide-group
      v-model="model"
      class="py-16"
      active-class="success"
      show-arrows
    >
      <v-slide-item
	  class="mb-16"
        v-for="(card, index) in cards"
        :key="index"
		
      >
        <anime-card 
		:title="card.title"
		:description="card.description"
		:image-url="card.imageUrl"></anime-card>
      </v-slide-item>
    </v-slide-group>
   
</template>

<script>
import AnimeCard from './AnimeCard.vue';
export default {
	components:{
		AnimeCard
	},
	data() {
	  return {
		cards: [
		  {
			title: 'Película 1',
			description: 'Descripción de la película 1',
			imageUrl: 'https://picsum.photos/id/237/300/200'
		  },
		  {
			title: 'Película 2',
			description: 'Descripción de la película 2',
			imageUrl: 'https://picsum.photos/id/238/300/200'
		  },
		  {
			title: 'Película 3',
			description: 'Descripción de la película 3',
			imageUrl: 'https://picsum.photos/id/239/300/200'
		  },
		  {
			  title: 'Película 4',
			  description: 'Descripción de la película 4',
			  imageUrl: 'https://picsum.photos/id/240/300/200'
			},
			{
			  title: 'Película 5',
			  description: 'Descripción de la película 5',
			  imageUrl: 'https://picsum.photos/id/241/300/200'
			},
			
		]
	  }
	}
}
</script>
