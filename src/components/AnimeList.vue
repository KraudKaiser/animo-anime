<template>
	<v-container class="d-flex">
		
					<v-list  class="d-flex flex-column"  height="100">
						<v-list-title class="d-flex justify-center"><h2>Filtrar por categoria</h2></v-list-title>
						<v-list-item @click="selectCategory(null)">Cualquier Categoria</v-list-item>
						<v-list-item v-for="category in categories" :key="category" @click="selectCategory(category)">
							<v-list-item-title>{{ category.name }}</v-list-item-title>
						</v-list-item>
					</v-list>
			
					
						<v-card width="100%">
								<v-row class="d-flex justify-center align-center align-self-center">
									<v-col
									v-for="anime in filteredAnimes"
									:key="anime._id"
									cols="12"
									sm="6"
									md="4"
									lg="3"
									>
									<anime-card :anime="anime" :index="index"></anime-card>
								</v-col>
							</v-row>
					</v-card>
				
				
	</v-container>
  </template>
  
  <script>
import AnimeCard from "./AnimeCard.vue"
import { mapState } from "vuex";
export default {
	data(){
		return{
			selectedCategory:null
		}
	},
	components:{
		AnimeCard
	},
	computed: {
		...mapState(["animes", "categories"]),
		filteredAnimes() {
			if (!this.selectedCategory) {
				return this.animes
			}
			
			return this.animes.filter(anime => anime.category.name === this.selectedCategory.name)
		}
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category
	  console.log(this.selectedCategory)
    }
  }
}
  </script>
  