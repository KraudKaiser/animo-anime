<template>
	<v-app>
		<app-bar></app-bar>
		<v-main class="grey lighten-3">

			<v-container>
				<v-sheet class="pa-5">
						<v-form @submit.prevent="login">
							<v-text-field label="Correo electrónico" v-model="email"></v-text-field>
							<v-text-field label="Contraseña" v-model="password" type="password"></v-text-field>
							<v-btn type="submit">Iniciar sesión</v-btn>
						  </v-form>
				</v-sheet>
				<v-sheet class="pa-5">
						<v-form @submit.prevent="register">
							<v-text-field label="Correo electrónico" v-model="email"></v-text-field>
							<v-text-field label="Contraseña" v-model="password" type="password"></v-text-field>
							<v-btn type="submit">Iniciar sesión</v-btn>
						  </v-form>
				</v-sheet>
		</v-container>
	</v-main>
	</v-app>
</template>

  <script>
	import { mapActions } from 'vuex'
	import AppBar from '@/components/AppBar.vue'
  export default {
	components:{
		AppBar
	},


  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    ...mapActions('auth', ['login']),
  },

  }
  </script>
  