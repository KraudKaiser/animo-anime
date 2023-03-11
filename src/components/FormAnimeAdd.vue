// AnimeForm.vue
<template>
  <v-form @submit.prevent="submitAnime">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            label="Title"
            v-model="anime.title"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            label="Category"
            :items="categories"
            v-model="anime.category"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-textarea
        label="Description"
        v-model="anime.description"
        required
      ></v-textarea>
      <v-divider></v-divider>
      <h4>Episodes</h4>
      <v-row>
        <v-col cols="12" md="4" v-for="(chapter, index) in anime.chapters" :key="index">
          <div>{{ `Chapter ${index + 1}: ${chapter.name}` }}</div>
          <v-btn color="primary" @click="deleteEpisode(index)">Delete</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            label="Add Episode"
            v-model="newEpisode"
            required
            @keyup.enter="addEpisode"
          ></v-text-field>
          <v-btn type="button" color="primary" @click="addEpisode">Add</v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      anime: {
        title: '',
        description: '',
        category: '',
        chapters: []
      },
      newEpisode: '',
    }
  },
  computed: {
    categories() {
      // Aquí puedes reemplazar este arreglo de ejemplo con las categorías de tu propia aplicación
      return ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'Science Fiction']
    },
  },
  methods: {
    ...mapActions(["addAnime"]),
    submitAnime() {
      this.addAnime({
        title:this.anime.title,
        description:this.anime.description,
        category:this.anime.category,
        chapters:this.anime.chapters,
    })
    },
    addEpisode(){
        this.anime.chapters.push({name:this.newEpisode}).then(()=>{
            console.log("Episodio añadido con exito")
        })
        
    },
    deleteEpisode(index){
        this.anime.chapters.splice(index, 1)
    },
}
}
</script>