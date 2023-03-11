<template>
  <v-app>
    <v-main>
      <snack-bar></snack-bar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import SnackBar from './components/SnackBar.vue';
export default {
  name: 'App',
  components:{
    SnackBar
  },
  data: () => ({
    //
  }),
  created(){
    this.fetchAnimes()
  },
  methods:{
    ...mapActions(["fetchAnimes"])
  }
}
</script>
