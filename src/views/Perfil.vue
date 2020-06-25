<template>
  <div class="login text-center m-5 p-5">
    <div>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="6" width="300px">
            <b-card-img src=https://i.pinimg.com/originals/1e/98/b5/1e98b56c2866cb61b2bfc76836221c2a.jpg alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card class="card" header="Concurso Fan Art Ghibli" title="Studio Ghibli スタジオジブリ es un estudio japonés de animación, considerado por la crítica especializada y muchos cinéfilos como uno de los mejores estudios de animación del mundo en la actualidad. En el mundo de la ilustración, este estudio ha sido un referente, sobre todo en su diseño de personajes, backgraunds de acuarelas y dinámica del movimiento.">
              <b-icon-pencil animation="cylon" style="color: #7952b3;"></b-icon-pencil>
              <b-form>
                <div class="fanart text-center">
                  <label>*Un fan art es un concepto proveniente del inglés comúnmente usado para denominar aquellas obras de arte, principalmente visuales, que están basadas en personajes, épocas, vestuarios u otros que el artista toma de universos previamente creados por un tercero. </label>
                 </div>
                  <div class="concurso text-center" style="color: #7952b3;">
                  <label>¡Al seleccionar tu favoritos, estas participando en el concurso y podrás recibir el fan art enmarcado! </label>
                 </div>
                <hr />
                <div class="text-center m-2">
                  <label for="feedback-user"><b>Favoritos de la encuesta  <b-icon-heart animation="throb" font-scale="1" variant="danger"></b-icon-heart></b></label>
                  <b-list-group v-for="item of peliculasSel" :key="item.index">
                    <b-list-group-item button>{{item}}</b-list-group-item>
                  </b-list-group>
                </div>
                <b-card-text></b-card-text>
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
    ...mapState(["peliculasSel"]),
   //...mapState(["perfil"]),
    
  },methods:{
    //...mapActions(["cargarPerfil"])
  },mounted(){
   // this.cargarPerfil()
  } 
};
</script>

<style lang="stylus" scoped>

.fanart {
  font-family: "Dosis", sans-serif;
  font-size: 14px;
  font-weight: lighter;
}

.card {
  font-family: "Dosis", sans-serif;

}

.concurso {
  font-family: "Dosis", sans-serif;
  font-size: 18px;
  font-weight: bolder;
}



</style>