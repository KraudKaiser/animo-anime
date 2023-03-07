import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	links:[
		{title:"Inicio", path:"/"},
		{title:"Directorio", path:"/directory"},
		{title:"Novedades", path:"/features"},
		{title:"Sobre Nosotros", path:"/about"},
	],
	routes:["/","/directory", "/features","/about"]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
