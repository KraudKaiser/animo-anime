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
	user: {
		name: 'John Doe',
		email: 'johndoe@example.com',
		animes: [
		  { title: 'Death Note', genre: 'Mystery', isLiked: true },
		  { title: 'Attack on Titan', genre: 'Action', isLiked: true },
		  { title: 'Your Lie in April', genre: 'Romance', isLiked: false },
		  { title: 'One Punch Man', genre: 'Comedy', isLiked: false },
		  { title: 'Fullmetal Alchemist', genre: 'Adventure', isLiked: true },
		],
	  },
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
	  //Activa o desactiva like
	  toggleLike(state, index) {
		state.user.animes[index].isLiked = !state.user.animes[index].isLiked;
	  },
		addCategory(state, category) {
		  state.categories.push(category);
		},
		addAnime(state, anime) {
		  state.animes.push(anime);
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
		const formData = new FormData();
		formData.append('file', file);
  
		return axios.post('/api/upload', formData, {
		  headers: {
			'Content-Type': 'multipart/form-data',
		  },
		})
		.then(response => {
		  const imageUrl = response.data.imageUrl;
		  commit('setImage', imageUrl);
		  return imageUrl;
		});
	  },
  
	  addAnime({ commit }, anime) {
		commit('addAnime', anime);
	  },
  
	  async addAnimeWithImage({ dispatch, commit }, { anime, file }) {
		try {
		  const imageUrl = await dispatch('uploadFile', file);
		  anime.coverImage = imageUrl;
		  commit('addAnime', anime);
		  return true;
		} catch (error) {
		  console.error(error);
		  return false;
		}
	  },
	  
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
