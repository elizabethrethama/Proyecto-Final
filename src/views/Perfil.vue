<template>
  <div class="login text-center m-5 p-5">
    <div>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="6" width="300px">
            <b-card-img src="https://placekitten.com/300/300" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card header="Mi Perfil" title="Tus datos">
              <b-icon-person-circle animation="cylon"></b-icon-person-circle>
              <b-form>
                <div class="text-left">
                  <label for="feedback-user">Nombre</label>
                  <b-input></b-input>
                </div>
                <div class="text-left">
                  <label for="feedback-user">Edad</label>
                  <b-input></b-input>
                </div>
                <div class="text-left">
                  <label for="feedback-user">Ciudad</label>
                  <b-input></b-input>
                </div>
                <div class="text-left">
                  <label for="feedback-user">Signo Zodiacal</label>
                  <b-input></b-input>
                </div>
                <hr />
                <div class="text-center m-2">
                  <label for="feedback-user">Favoritos de la encuesta</label>
                  <b-list-group v-for="item of selected" :key="item.index">
                    <b-list-group-item button>{{item}}}</b-list-group-item>
                  </b-list-group>
                </div>
                <b-card-text></b-card-text>
                <b-button class="button" type="submit" variant="info">Actualizar</b-button>
              </b-form>
            </b-card>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Perfil",
  computed: {
    ...mapState(["selected"])
  }
};
</script>

<style lang="stylus" scoped></style>