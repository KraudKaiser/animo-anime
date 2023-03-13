<template>
	<v-app-bar
	app
	color="teal lighten-4"
	flat
	>
	<v-container class="py-0 fill-height" :class="{'pointer-events':'none'}">
		<v-btn  text :to="routes[0]">
			<h1 class="display-1">¡Animo Time!</h1>
		</v-btn>
		<v-spacer></v-spacer>
		<v-btn class="py-2 ma-1"
		v-for="(link, index) in links"
		:key="index"
		:to="link.path"
		>
		{{ link.title }}
	</v-btn>
	<v-spacer></v-spacer>
	
	
	<v-responsive max-width="260">
		<!-- /*
	-->
	<anime-search></anime-search>
	</v-responsive>
	<v-spacer></v-spacer>

	
	<v-menu offset-y>
	<template v-slot:activator="{ on }">
				<v-avatar>
					<v-btn v-on="on">{{ /*user.email*/ }}<v-icon>
						mdi-account
					</v-icon></v-btn>
				</v-avatar>
				</template>
				<v-list v-if="user === null">
				<v-list-item to="/login" >
				<v-list-item-title >Iniciar Sesion</v-list-item-title>
				</v-list-item>
				</v-list>
				
				<v-list v-else>
					<v-list-item  to="/profile">
						<v-list-item-title >Perfil</v-list-item-title>
					</v-list-item>
				<v-list-item to="/admin" v-if="user.admin">
					<v-list-item-title>Panel de administración</v-list-item-title>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item to="/" @click="logOut">
					<v-list-item-title>Cerrar sesión</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
</v-container>
</v-app-bar>
</template>

<script>
import AnimeSearch from "./AnimeSearch.vue";
	import {mapState, mapActions} from "vuex"
	export default{
		components:{
			AnimeSearch
		},
	computed: mapState(["links", "routes", "user"]),
	methods:{
		...mapActions(["logout"]),
		logOut(){
			this.logout()
			this.$router.push("/")
		}
	}
	
}
</script>
