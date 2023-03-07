<template>
  <v-app>
	<app-bar></app-bar>
	<v-sheet class="pa-6 ma-2" elevation="3" min-height="70vh" >
		<div class="heading" > Hola</div>
	</v-sheet>
  </v-app>
</template>
<script>
import AppBar from '@/components/AppBar.vue';
export default{
	components:{
		AppBar
	}
}
</script>