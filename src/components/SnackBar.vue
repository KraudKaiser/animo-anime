<template>
    <div>
      <v-snackbar
        v-model="snackbar.show"
        :color="snackbar.color"
        :timeout="3000"
        bottom right
      >
        {{ snackbar.text }}
      </v-snackbar>
    </div>
  </template>

<script>
import {mapState} from "vuex"
export default{
    computed:{
        ...mapState(["snackbar"])
    }
}

</script>