<template>
  <div>
    <b-sidebar class="sidebar" id="sidebar-1" title="Encuesta Dibujistica" shadow>
      <div class="px-4 py-2">
        <p>
          ¿Te gusta Studios Ghibli? <b-icon-heart></b-icon-heart>
          ¡Seleciona tus peliculas favoritas para crear fan art en su honor!
        </p>
      </div>
      <div class="px-4 py-0 mb-0">
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
      <div class="pb-2 text-center mx-4">
        <b-button block type="button" class="btnActualizar" variant="danger" @click="pelisSel(selected)">Actualizar</b-button>
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
<style scoped>
.btnActualizar{
  background-color:  #e56ded;
  color:white;
  border-color: transparent;
}

</style>