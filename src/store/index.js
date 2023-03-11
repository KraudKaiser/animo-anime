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
	categories:[],
	//Login
	user:null,
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
		state.user = user
	  },
	
	  SET_TOKEN(state, token) {
		state.token = token
	  },
	
	  CLEAR_AUTH(state) {
		state.user = null
		state.token = null
		localStorage.removeItem("token")
	  },
	  //Activa o desactiva like
	  toggleLike(state, index) {
		state.user.animes[index].isLiked = !state.user.animes[index].isLiked
	  },
		addCategory(state, category) {
		  state.categories.push(category)
		},
		addAnime(state, anime) {
		  state.animes.push(anime)
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
		})
	},
	uploadFile({ commit }, file) {
		const formData = new FormData()
		formData.append('file', file)
  
		return axios.post('/api/upload', formData, {
		  headers: {
			'Content-Type': 'multipart/form-data',
		  },
		})
		.then(response => {
		  const imageUrl = response.data.imageUrl
		  commit('setImage', imageUrl)
		  return imageUrl
		})
	  },
  
	  addAnime({ commit }, anime) {
		commit('addAnime', anime)
	  },
  
	  async addAnimeWithImage({ dispatch, commit }, { anime, file }) {
		try {
		  const imageUrl = await dispatch('uploadFile', file)
		  anime.coverImage = imageUrl
		  commit('addAnime', anime)
		  return true
		} catch (error) {
		  console.error(error)
		  return false
		}
	  },
	  	login({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8081/user/login', { email, password })
          .then((response) => {
            const token = response.data.token
            const user = response.data.user
            // Guardar el token y el usuario en el estado
            commit('SET_TOKEN', token)
            commit('SET_USER', user)
            // Guardar el token en el almacenamiento local
            localStorage.setItem('token', token)
            // Resolver la promesa
            resolve()
          })
          .catch((e) => {
            // Rechazar la promesa con el error
            reject(e)
          })
      })
	},

	  register({commit}, form){
		return new Promise((resolve, reject)=>{
			axios.post("http://localhost:8081/user/register", {form})
			.then((response) =>{
				const token = response.data.token
				const user = response.data.user

				commit("SET_TOKEN", token)
				commit("SET_USER", user)
				localStorage.setItem('token', token)
            // Resolver la promesa
            resolve()
			})
			.catch((e) =>{
				reject(e)
			})
		})
	  },
	  
	logout({commit}){
		commit("CLEAR_AUTH")
		console.log("fui usado")
	}
},
  

  //funcionan como las computed properties.
  getters: {
	getAnimeById: (state) => (id) => {
		return state.animes.find((anime) => anime._id === id)
	  },
	  
	isAuthenticated: state => !!state.token,
		
	},
  modules: {
  }
})
