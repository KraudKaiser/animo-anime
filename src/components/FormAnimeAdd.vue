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
      <v-row>
          <v-col cols="12" md="6">
            <v-file-input
              label="Thumbnail"
              v-model="anime.thumbnail"
              accept="image/*"
              @change="onThumbnailChange"
            ></v-file-input>
          </v-col>
      </v-row>

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
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      anime: {
        title: '',
        description: '',
        category: '',
        chapters: [],
        thumbnail: null,
      },
      newEpisode: '',
    }
  },
  computed: {
    ...mapState({
      categories: state => state.categories.map(category => category.name)
    })
  },
  methods: {
    ...mapActions(["addAnime"]),
    onThumbnailChange(event) {
        console.log(event)
         const file = event;
         this.anime.thumbnail = file
  }, 
  addEpisode(){
      const obj = { name:this.newEpisode }
        this.anime.chapters.push(obj) 
    },
    deleteEpisode(index){
        this.anime.chapters.splice(index, 1)
    },
  submitAnime() {
    const formData = new FormData();
      formData.append("title", this.anime.title);
      formData.append("description", this.anime.description);
      formData.append("category", this.anime.category);
      formData.append('chapters', JSON.stringify(this.anime.chapters));
      formData.append("thumbnail", this.anime.thumbnail);
      this.addAnime(formData)
}
}
}
</script>