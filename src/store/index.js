import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
	//no se puede mutar (cambiar) state facilmentet.
	// para ello hay que usar mutations
  state: {
	links:[
		{title:"Inicio", path:"/"},
		{title:"Directorio", path:"/directory"},
		{title:"Sobre Nosotros", path:"/about"},
	],
	routes:["/","/directory", "/features","/about"],
	animes:[],
	//Login
	user: null,
	token: null,
  },
  //se utiliza para cambiar las variables en state
  //reciben siempre como primer parametro state
  //actua sincronamente (no .then o async)
  mutations: {
	setAnimes(state, animes){
		state.animes = animes
	},
	//Mutations para Login
	SET_USER(state, user) {
		state.user = user;
	  },
	
	  SET_TOKEN(state, token) {
		state.token = token;
	  },
	
	  CLEAR_AUTH(state) {
		state.user = null;
		state.token = null;
	  },
  },
  //Actions es para cambiar las variables de state async
  //pero debe hacer commit de las variables en mutations
  //reciben contexto, destructurandolo a commit
  actions: {
	fetchAnimes({commit}){
		axios.get("https://jsonplaceholder.typicode.com/photos")
		.then(response => {
			commit("setAnimes", response.data.splice(4995))
	}
	)
	}
  },

  //funcionan como las computed properties.
  getters: {
	getAnimeById: (state) => (id) => {
		return state.animes.find((anime) => anime._id === id);
	  }
  },
  modules: {
  }
})
