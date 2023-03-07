<template>
	<v-app-bar
	app
	color="teal lighten-4"
	flat
	>
	<v-container class="py-0 fill-height">
		
		<v-btn
		v-for="link in links"
		:key="link"
		text
		>
		<router-link to={}>{{ link }}</router-link>
	</v-btn>
	
	<v-spacer></v-spacer>
	
	<v-responsive max-width="260">
		<v-text-field prepend-inner-icon="mdi-magnify"
		dense
		flat
		hide-details
		rounded
		solo-inverted
		></v-text-field>
	</v-responsive>
	<v-avatar
	class="mr-10"
	color="grey darken-1"
	size="32"
	>
		<v-icon>mdi-account</v-icon>
	</v-avatar>
</v-container>
</v-app-bar>
</template>

<script>
	import {mapState} from "vuex"
	export default{
	computed: mapState(["links"])

}
</script>
