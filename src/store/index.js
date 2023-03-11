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
	snackbar:{
		show:false,
		color:"",
		text:"" 
	}
  },
  //se utiliza para cambiar las variables en state
  //reciben siempre como primer parametro state
  //actua sincronamente (no .then o async)
  mutations: {
	setAnimes(state, animes){
		state.animes = animes
	},
	setSnackBar(state, data){
		const {color, text} = data
			state.snackbar.show = true	
			state.snackbar.color = color
			state.snackbar.text = text
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
	  addAnime({commit},anime) {
		return new Promise((resolve, reject )=>{
			axios.post("http://localhost:8081/anime/", anime)
			.then((response) =>{
				commit("setSnackBar",{color:"green", text:`El anime ${response.data.title} ha sido añadido exitosamente`})
				resolve()
			})
			.catch((e)=>{
				commit("setSnackBar", {color:"error", text:e.response.data.error})
				reject()
			})
		})
	  },
	  addCategory({commit}, category){
		  return new Promise((resolve, reject)=>{
			  axios.post("http://localhost:8081/category/", category).then((response) =>{
				 commit("setSnackBar", {color:"green", text:`La Categoria ${response.data.name} ha sido Añadida`})
				  resolve()
				})
				.catch((e) =>{
					reject(e)
					commit("setSnackBar", {color:"error", text:"Ocurrio un error, Quizas la categoria ya existe"})
				})
			})
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
	},
	fetchAnimes({commit}){
		axios.get("http://localhost:8081/anime")
		.then((response) =>{
				commit("setAnimes", response.data)
		})
	}
},
  

  //funcionan como las computed properties.
  getters: {
	getAnimeById: (state) => (id) => {
		console.log(id)
		return state.animes.find((anime) => anime._id === id)
	  },
	  
	isAuthenticated: state => !!state.token,
		
	},
  modules: {
  }
})
