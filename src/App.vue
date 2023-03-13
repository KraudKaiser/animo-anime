<template>
  <v-app>
    <v-main>
      <snack-bar></snack-bar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SnackBar from './components/SnackBar.vue';
export default {
  name: 'App',
  components:{
    SnackBar
  },
  data: () => ({
  }),
  computed:{
    ...mapState(["token","user"]),
  },
  methods:{
    ...mapActions(["fetchCategories", "fetchUser","fetchAnimes", "setToken"]),
    handleLocalToken(){
      if (!this.token) {
      const token = localStorage.getItem('token');
      if (token) {
        this.setToken(token)
      }
    }
    },
    handleUser(){
      if (this.user === null) {
      if (this.token) {
        this.fetchUser(this.token)
      }
    }
    }
  },
  created(){
    this.handleLocalToken()
    this.handleUser()
    this.fetchAnimes()  
    this.fetchCategories()
  },
}
</script>
