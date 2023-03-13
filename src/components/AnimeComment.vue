<template>
    <div>
      <v-card class="ma-5">
        <v-card-title>Dejar un comentario</v-card-title>
        <v-card-text>
          <v-form>
            <v-select
              v-model="rating"
              :items="[1, 2, 3, 4, 5]"
              label="Calificación"
              required
            ></v-select>
            <v-textarea
              v-model="comment"
              label="Comentario"
              required
            ></v-textarea>
            <v-btn color="primary" @click="newComment">Enviar</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
  
      <v-divider></v-divider>
  
      <v-card class="ma-5" v-for="(comment, index) in anime.comments" :key="index">
        <v-card-title>{{ comment.author }}</v-card-title>   
        <v-rating :value="comment.rating" readonly>{{ comment.rating }}</v-rating>
        <v-card-text>{{ comment.comment }}</v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
  import {mapState, mapActions, mapMutations} from "vuex"
  export default {
    data() {
      return {
        rating: 0,
        comment:"",
      };
    },
    computed:{
        ...mapState(["user", "animes"])
    },
    methods: {
        ...mapActions(["addCommentary"]),
		...mapMutations(["setSnackBar"]),
      newComment() {
		if(this.user === null){
			this.setSnackBar({color:"error", text:"No puedes comentar si no has iniciado sesion"})
		}else{
			if (this.rating && this.comment) {
				const animeId = this.anime._id
				const comment = { author:this.user.name, rating: this.rating, comment: this.comment, animeId};
				this.addCommentary(comment)
				this.rating = 0;
				this.comment = "";
			}
		}
      },
    },
    props:{
        anime:{}
    }
  };
  </script>
  