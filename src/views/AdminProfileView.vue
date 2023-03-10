<template>
    <v-app>
        <app-bar></app-bar>
        <v-container>
            <h1>Panel de Administrador</h1>
            
            <v-card>
                <v-card-title>Añadir Categoría</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field label="Nombre" v-model="category.name" required></v-text-field>
                        <v-text-field label="Descripción" v-model="category.description" required></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="addCategory">Añadir Categoría</v-btn>
                </v-card-actions>
            </v-card>
            
      <v-card>
          <v-card-title>Añadir Anime</v-card-title>
          <v-card-text>
              <v-form>
                  <v-text-field label="Título" v-model="anime.title" required></v-text-field>
                  <v-text-field label="Categoría" v-model="anime.category" required></v-text-field>
                  <v-text-field label="Número de Capítulos" v-model="anime.numEpisodes" required></v-text-field>
                  <v-text-field label="Duración de los Capítulos" v-model="anime.episodeLength" required></v-text-field>
                  <v-file-input label="Imagen de Portada" v-model="anime.coverImage"></v-file-input>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="addAnime">Añadir Anime</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</v-app>
</template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  import AppBar from '@/components/AppBar.vue';
  export default {
    components:{
        AppBar
    },
    data() {
        return {
            category: {
          name: '',
          description: '',
        },
        anime: {
          title: '',
          category: '',
          numEpisodes: 0,
          episodeLength: 0,
          coverImage: null, // agregar una propiedad para la imagen de portada
        },
      }
    },
    computed: {
      ...mapState({
        categories: state => state.categories,
      }),
    },
    methods: {
      ...mapActions([
        'addCategory',
        'addAnime',
      ]),
    },
  };
  </script>
  