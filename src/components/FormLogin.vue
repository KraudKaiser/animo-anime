<template>
	<v-sheet class="pa-5">
		<v-form @submit.prevent="handleSubmitLogin">
			<v-text-field label="Correo electrónico" v-model="email"></v-text-field>
			<v-text-field label="Contraseña" v-model="password" type="password"></v-text-field>
			<v-btn type="submit">Iniciar sesión</v-btn>
		  </v-form>
</v-sheet>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	data() {
    return {
      email: '',
      password: '',
    };
  },
  methods:{
	  ...mapActions(["login"]),
		handleSubmitLogin(){
			this.login({email:this.email, password:this.password})
			.then(()=>{
				this.$router.push("/profile")
			})
			.catch((e) =>{
				console.log(e)
			})
		}
	}
}
</script>

