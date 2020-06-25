<template>
  <div>
    <b-sidebar id="sidebar-1" title="Encuesta Dibujistica" shadow>
      <div class="px-4 py-2">
        <p>
          ¿Cual es tu pelicula favorita del Studios Ghibli?
          <b-icon-star></b-icon-star>¡Seleciona tu film favorito para crear un fan art en su honor!.
        </p>
      </div>
      <div class="px-4">
        <b-form-group label="Films:">
          <b-form-checkbox-group
            v-for="item of peliculas"
            :key="item.index"
            id="checkbox-group-2"
            stacked
            v-model="selected"
          >
            <b-form-checkbox :value="item.title">{{item.title}}</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </div>
      <div>
        Seleccionados:
        <strong>{{ selected }}</strong>
      </div>
      <div>
        <b-button class="button" type="button" variant="info" @click="pelisSel(selected)">Guardar</b-button>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ListaPeliculas",
  computed: {
    ...mapState(["peliculas"])
  },
  methods: {
    ...mapActions(["pelis"]),
    ...mapActions(["pelisSel"])
  },
  mounted() {
    this.pelis();
    console.log("HOLI");
  },

  actions: {
    async pelisSel(selected) {
      try {              
        commit("pelisSel", selected);
      } catch (error) {
        console.error(error);
      }
    }
  },
  data() {
    return {
      selected: []
    };
  }
};
</script>