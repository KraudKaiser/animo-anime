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
	  
		addCategory(state, category) {
		  state.categories.push(category)
		},
		addAnime(state, anime) {
		  state.animes.push(anime)
		},
		setLike(state,{user, index}) {
			const anime = state.animes[index]
			if (anime) {
				const likes = anime.likes || [];
				const index = likes.indexOf(user._id);
				if (index >= 0) {
				  likes.splice(index, 1);
				} else {
				  likes.push(user._id);
				}
				anime.likes = likes;
			  }
		},
	  },
  //Actions es para cambiar las variables de state async
  //pero debe hacer commit de las variables en mutations
  //reciben contexto, destructurandolo a commit
  actions: {
	setToken({commit}, token){
		commit("SET_TOKEN", token)
	},
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
	},
	fetchLike({commit}, like,index){
		if(this.state.user === null){
			commit("setSnackBar", {color:"error", text:"Inicia sesion para dar Like"})
		}
		commit("setLike",{user: this.state.user, index})

		axios.post("http://localhost:8081/anime/like", like)
		.then((response) =>{
			console.log(response)
		})
		
	},
	fetchUser({commit}, token){
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.get('http://localhost:8081/user/login/token')
          .then((response) => {
            const user = response.data;
            commit('SET_USER', user);
          })
          .catch((error) => {
            console.error(error);
          });
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
