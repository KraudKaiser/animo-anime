<template>
	<v-app-bar
	app
	color="teal lighten-4"
	flat
	>
	<v-container class="py-0 fill-height">
		<v-btn :class="{'disable-events':'none'}" text :to="routes[0]">
			<h1 class="display-1">¡Animo Time!</h1>
		</v-btn>
		<v-spacer></v-spacer>
		<v-btn class="py-2 ma-1"
		v-for="link in links"
		:key="link"
		:to="link.path"
		>
		{{ link.title }}
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
	<v-spacer></v-spacer>

	<router-link to="/profile">
		<v-avatar
		class="mr-10"
		color="grey darken-1"
		size="32"
		>
		<v-btn>
			<v-icon>
				mdi-account
			</v-icon>
		</v-btn>
		</v-avatar>
	</router-link>
</v-container>
</v-app-bar>
</template>

<script>
	import {mapState} from "vuex"
	export default{
	computed: mapState(["links", "routes"])

}
</script>
