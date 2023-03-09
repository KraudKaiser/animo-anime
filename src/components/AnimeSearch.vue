<template>
	<v-container>
	  <v-row>
		<v-col>
			<v-text-field @keyup.enter="search()" prepend-inner-icon="mdi-magnify"
			dense
			flat
			hide-details
			rounded
			solo-inverted
			></v-text-field>
		</v-col>
	  </v-row>
	  <v-row v-if="pressed">
		<v-col>
		  <v-list>
			<v-list-item v-for="result in results" :key="result.mal_id">
			  <v-list-item-content>
				<v-list-item-title>{{ result.title }}</v-list-item-title>
			  </v-list-item-content>
			</v-list-item>
		  </v-list>
		</v-col>
	  </v-row>
	</v-container>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  export default {
	data() {
	  return {
		searchTerm: '',
		results: [],
		pressed:false
	  }
	},
	computed:{
		...mapActions(["searchAnime"])
	}
  }
  </script>
  

