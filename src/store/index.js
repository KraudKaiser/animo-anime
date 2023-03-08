import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	//no se puede mutar (cambiar) state facilmentet.
	// para ello hay que usar mutations
  state: {
	links:[
		{title:"Inicio", path:"/"},
		{title:"Directorio", path:"/directory"},
		{title:"Novedades", path:"/features"},
		{title:"Sobre Nosotros", path:"/about"},
	],
	routes:["/","/directory", "/features","/about"]
  },
  //se utiliza para cambiar las variables en state
  //reciben siempre como primer parametro state
  //actua sincronamente (no .then o async)
  mutations: {
  },
  //Actions es para cambiar las variables de state async
  //pero debe hacer commit de las variables en mutations
  //reciben contexto, destructurandolo a commit
  actions: {
  },

  //funcionan como las computed properties.
  getters: {
  },
  modules: {
  }
})
