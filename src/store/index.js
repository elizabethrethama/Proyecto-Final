import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peliculas: [],
    peliculasSel: [],
    user: {}
  },
  getters: {
    user: state => {
      return state.user
    }
  },
  //el loco de los mandados las mutaciones realizan los cambios en el state
  mutations: {
    llenarPeliculas(state, peliculasGet) {
      state.peliculas = peliculasGet
    }, llenarPeliculasSel(state, peliculasSel) {
      console.log(peliculasSel)
      state.peliculasSel = peliculasSel
    }, cargarUser(state, user) {
      console.log(user)
      state.user = user
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
    async pelisSel({ commit }, pelisSel) {
      console.log("asd" + pelisSel)
      const respuesta = await axios.post(
        "https://rethama-portafolio.firebaseio.com/usuarios.json", { user: this.user, Favoritos: pelisSel }
      );
      commit('llenarPeliculasSel', pelisSel)
    },
    async cargarUser({ commit }, user) {
      if (user) {
        const respuesta = await axios.get(
          "https://rethama-portafolio.firebaseio.com/usuarios.json"
        );
        const array = [];

        Object.keys(respuesta.data).forEach((key) => {
          array.push({ [key]: respuesta.data[key] });
        });
        const usuariocompleto = array.filter(item => { item && item.user && item.user == user })
        if (usuariocompleto && Array.isArray(usuariocompleto) && usuariocompleto.length >= 0 && usuariocompleto[0].Favoritos) {
          commit('pelisSel', usuariocompleto[0].Favoritos)
        }

        console.log("asd" + user.email)
        commit('cargarUser', user.email)
      } else {
        return false;
      }
    }
  }
})

