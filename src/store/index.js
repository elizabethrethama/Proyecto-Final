import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peliculas: [],
    peliculasSel: [],
    perfil:{}
  },
  //el weon de los mandados las mutaciones realizan los cambios en el state
  mutations: {
    llenarPeliculas(state, peliculasGet) {
      state.peliculas = peliculasGet
    }, llenarPeliculasSel(state, peliculasSel) {
      console.log(peliculasSel)
      state.peliculasSel = peliculasSel
    },llenarPerfil(state,perfil){
      state.perfil=perfil
    }
  },
  //las acciones llaman a las mutaciones con el comit
  actions: {
    async pelis({ commit }) {
      try {
        const respuesta = await axios.get(
          "https://ghibliapi.herokuapp.com/films"
        );
        console.log(respuesta.data);
        const peliculas = respuesta.data;
        commit('llenarPeliculas', peliculas)
      } catch (error) {
        console.error(error);
      }
    },
    async pelisSel({ commit },pelisSel) {
        console.log("peru"+pelisSel)
        commit('llenarPeliculasSel', pelisSel)

    },
    async cargarPerfil({commit}){
      
      commit('llenarPerfil',{nombre:"jurelito"})
    }
  }
})

