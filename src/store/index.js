import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peliculas: [],
    peliculasSel: []
  },
  mutations: {
    llenarPeliculas(state, peliculasGet) {
      state.peliculas = peliculasGet
    }, llenarPeliculasSel(state, peliculasSel) {
      state.peliculasSel = peliculasSel
    },
  },
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
    }
  }
})

