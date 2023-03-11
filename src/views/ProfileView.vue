<template>
	<v-app>
		<app-bar></app-bar>
		<v-main class="grey lighten-3">
			<v-sheet>
				<v-container>
    <h1>{{ user.name }}</h1>
    <h2>{{ user.email }}</h2>
    <h3>Animes favoritos</h3>
    <v-list>
      <v-list-item
        v-for="(anime, index) in user.animes"
        :key="index"
      >
        <v-list-item-title>{{ anime.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ anime.genre }}</v-list-item-subtitle>
        <v-list-item-action>
          <v-icon
            @click="toggleLike(index)"
            :class="{ 'red--text': anime.isLiked }"
          >
            {{ anime.isLiked ? 'mdi-heart' : 'mdi-heart-outline' }}
          </v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
			</v-sheet>
				
			</v-main>
		</v-app>
</template>
<script>
import AppBar from '@/components/AppBar.vue';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
	
	components:{
		AppBar
	},


  computed: {
    ...mapState(['user']),
  },

  methods: {
	...mapMutations(["toggleLike"])
  },

  created() {
    // Aquí puedes enviar una solicitud al servidor para obtener el estado de autenticación del usuario.
  },

}
</script>