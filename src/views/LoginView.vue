<template>
	<v-app>
		<app-bar></app-bar>
		<v-main class="grey lighten-3">

			<v-container>
				<form-login></form-login>
				<form-register></form-register>
		</v-container>
	</v-main>
	</v-app>
</template>

  <script>
	import AppBar from '@/components/AppBar.vue'
	import FormLogin from '@/components/FormLogin.vue';
	import FormRegister from '@/components/FormRegister.vue';
  export default {
	components:{
		AppBar,
		FormLogin,
		FormRegister
	}
}
  </script>
  