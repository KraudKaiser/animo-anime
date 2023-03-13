<template>
	<v-container>
	  <v-text-field
	 		 dense
			flat
			hide-details
			rounded
			solo-inverted
	  @keyup.enter="querySearch" v-model="queryText" label="Buscar anime"></v-text-field>
	</v-container>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		queryText: ''
	  }
	},
	methods: {
	 querySearch() {
		this.$router.push(`/search?query=${this.queryText}`)
	  }
	}
  }
  </script>
  

