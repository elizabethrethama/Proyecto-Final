<template>
  <div class="hello">
    <div>
      <img :src="images.portada" class="bg-portada" />
    </div>
    <div id="perfil">
      <b-container fluid class="bv-example-row div-perfil">
        <b-row align-h="around">
          <b-col lg="3" md="2" sm="12" class="text-center">
            <img :src="images.perfil" width="320px" />
          </b-col>
          <b-col lg="1" md="1" sm="0"></b-col>
          <b-col lg="8" md="9" sm="12" class="leyenda-perfil mt-5 text-justify">
            <div>
              <label>
                Ilustradora digital, Duoc UC, diplomada en Ilustración, Universidad Católica de Chile,
                certificación en Illustration and The Artist’s Journal en SVA, NYC (School of Visual Arts, New York City).
                De corazón “Chorera” como le dicen a las personas que nacieron en la ciudad de Talcahuano, 8va Región.
                Se define feminista y su trabajo trata temas como la injusticia y la desigualdad social.
                Fue víctima de abusos durante su adolescencia.
                Re-descubrirse, darse una oportunidad a sí misma y amarse, le ayudó a combatir sus demonios.
                La ilustración y su gata Princesa fueron su salvación,
                esta última lleva más de 20 años a su lado, ama a los insectos,
                fan de Jane Austen, Hans Zimmer y Maeve Wiley.
              </label>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container class="bv-example-row text-center mb-5 mt-2">
      <b-row>
        <b-col class="titulo-portafolio">
          <label>PORTAFOLIO</label>
          <div><hr></div>
        </b-col>
      </b-row>
    </b-container>
    <div id="portafolio">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide caption="Musas de Elementos" text="Ilustración decorativa digital.">
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../../src/assets/c1.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide
          caption="Diferentes años, la misma lucha"
          text="Ilustración digital mixta, Feminismo."
        >
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../../src/assets/c2.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide
          caption="Amor en tiempos de revuelta"
          text="Ilustracion digital, inspirada en un fotomontaje."
        >
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../../src/assets/c3.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide
          caption="Hasta que la dignidad se haga costumbre"
          text="Ilustración digital lineal, mixta. Despertar politico y social."
        >
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../../src/assets/c4.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide
          caption="Journey to NY"
          text="Ilustración tradicional: acuarelas, marcadores y lapices."
        >
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../../src/assets/c5.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide caption="La casa de al lado" text="Ilustración tradicional: acuarelas.">
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../../src/assets/c6.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide
          caption="Carnaval"
          text="Ilustración mixta, lineart tradicional y pintado digital."
        >
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../../src/assets/c7.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide
          caption="Fungi Cat"
          text="Ilustración mixta: lineart tradicional y pintado digital."
        >
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../../src/assets/c8.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <b-container class="bv-example-row text-center mb-5 mt-5">
      <b-row>
        <b-col class="titulo-portafolio">
          <label>PRODUCTOS</label>
          <div><hr></div>
        </b-col>
      </b-row>
    </b-container>
    <div id="productos">
      <b-container class="bv-example-row mb-5 pb-5">
        <b-row class="pb-5">
          <b-col>
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    :src="require('../../src/assets/p1.jpg')"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Cicatriz">
                    <b-card-text>Libro objeto ilustrado. Una guía para volver a amarse.</b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
              <template v-slot:footer>
                <small class="text-muted">¡Inicia sesión o registrate para ver más!</small>
              </template>
            </b-card>
          </b-col>
          <b-col>
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    :src="require('../../src/assets/p2.jpg')"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Cuadros">
                    <b-card-text>Cuadros decorativos con ilustraciones originales del autor.</b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
              <template v-slot:footer>
                <small class="text-muted ">¡Inicia sesión o registrate para ver más!</small>
              </template>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    :src="require('../../src/assets/p3.jpg')"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Poleras">
                    <b-card-text>Poleras estampadas con diferentes diseños, todas las tallas, para mujer y hombre.</b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
              <template v-slot:footer>
                <small class="text-muted">¡Inicia sesión o registrate para ver más!</small>
              </template>
            </b-card>
          </b-col>
          <b-col>
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    :src="require('../../src/assets/p4.jpg')"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Cuadros personalizados">
                    <b-card-text>Encarga tu retrato y recíbelo enmarcado del tamaño que tú quieras.</b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
              <template v-slot:footer>
                <small class="text-muted">¡Inicia sesión o registrate para ver más!</small>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      images: {
        portada: require("../../src/assets/portada.jpg"),
        perfil: require("../../src/assets/fotoperfil.jpg")
      }
    };
  },
  methods: {
    onSlideStart: function(slide) {
      this.sliding = true;
    },
    onSlideEnd: function(slide) {
      this.sliding = false;
    }
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;300&display=swap");

.bg-portada {
  width: 100%;
}

.div-perfil {
  padding: 10%;
}

.foto-perfil {
  padding-left: 0px;
}

label {
  font-family: "Dosis", sans-serif;
}

.leyenda-perfil {
  font-size: 22px;
}

.titulo-portafolio {
  font-size: 26px;
  letter-spacing: 7pt; 
  font-weight: bold;
}
.text-muted{
  font-size: 16px;
  font-weight: lighter;
  letter-spacing: 3pt; 
}

</style>
