<template>
    <v-app>
        <app-bar></app-bar>
        <v-container>
            <h1>Panel de Administrador</h1>
            
            <form-category-add></form-category-add>
            <form-anime-add></form-anime-add>
    </v-container>
</v-app>
</template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  import AppBar from '@/components/AppBar.vue';
  import FormAnimeAdd from '@/components/FormAnimeAdd.vue'; 
  import FormCategoryAdd from '@/components/FormCategoryAdd.vue';
  export default {
    components:{
        AppBar,
        FormAnimeAdd,
        FormCategoryAdd
    },
    data() {
        return {
            category: {
          name: '',
          description: '',
        },

      }
    },
    computed: {
      ...mapState({
        categories: state => state.categories,
      }),
    }
  };
  </script>
  