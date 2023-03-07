<template>
  <v-app>
    
    <v-main>
		<router-link to="/">Inicio</router-link>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
