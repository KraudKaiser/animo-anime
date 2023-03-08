<template>
	<v-card :to="title" class="mx-auto" max-width="150">
	  <v-img :src="imageUrl" height="200px"></v-img>
	  <v-card-title>{{ title }}</v-card-title>	</v-card>
  </template>
  
  <script>
  export default {
	name: 'AnimeCard',
	props: {
	  title: {
		type: String,
		required: true
	  },
	  imageUrl: {
		type: String,
		required: true
	  }
	}
  }
  </script>
  
  <style scoped>
	.v-card__title, .v-card__text {
	  text-align: center;
	}
  </style>
  