<template>
	<v-app>
		<app-bar></app-bar>
		<v-main class="grey lighten-3">
			<v-sheet>

				<v-app-bar-title>Nombre de tu aplicación</v-app-bar-title>
				<v-spacer></v-spacer>
				<v-menu offset-y>
					<template v-slot:activator="{ on }">
						<v-btn v-on="on">{{ /*user.email*/ }}</v-btn>
					</template>
					<v-list>
						<v-list-item>
							<v-list-item-title>Perfil</v-list-item-title>
						</v-list-item>
						<v-list-item>
							<v-list-item-title>Panel de administración</v-list-item-title>
						</v-list-item>
						<v-divider></v-divider>
						<v-list-item @click="logout">
							<v-list-item-title>Cerrar sesión</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
				
				<v-main>
					<router-view></router-view>
				</v-main>
				
			</v-sheet>
				
			</v-main>
		</v-app>
</template>
<script>
import AppBar from '@/components/AppBar.vue';
import { mapState, mapActions } from 'vuex';
export default {
	components:{
		AppBar
	},


  computed: {
    ...mapState(['user']),
  },

  methods: {
    ...mapActions(['logout']),
  },

  created() {
    // Aquí puedes enviar una solicitud al servidor para obtener el estado de autenticación del usuario.
  },

}
</script>