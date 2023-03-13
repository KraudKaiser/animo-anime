<template>
	<v-sheet class="pa-5">
		<v-form @submit.prevent="handleRegister">
			<v-text-field label="Nombre de Usuario" required v-model="name"></v-text-field>
			<v-text-field label="Correo electrónico" required v-model="email"></v-text-field>
			<v-text-field label="Contraseña" required v-model="password" type="password"></v-text-field>
			<v-btn type="submit">Registrarse</v-btn>
		  </v-form>
</v-sheet>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
export default {
	data(){
		return{
			name:"",
			email:"",
			password:""
		}
	},
	methods: {
		...mapActions(["register"]),
		...mapMutations(["setSnackBar"]),
		handleRegister(){
			console.log(!this.email.includes("@"))
			if(this.name === "" || this.email === "" || !this.email.includes("@") || this.password === ""){
				this.setSnackBar({color:"error", text:"Campos de registro insuficientes"})
			}else{
				
				this.register({name:this.name, email:this.email, password:this.password})
				.then(()=>{
					this.$router.push("/profile")
				})
				.catch((e)=>{
					console.log(e)
				})
			}
			}
	},
}
</script>

<style>

</style>