<template>
  <div class="favoritos m-5 p-5">
    <div>
      <b-row>
        <b-col class="titulo-productos text-center mb-5 mt-2">
          <label>PRODUCTOS ÚNICOS Y LLENOS DE COLOR</label>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="subtitulo-productos text-center mb-5 mt-2">
          <label>
            Recuerda que puedes agregar a favoritos el producto que desees, puedes guardarlos
            <br />en tu perfil y solicitar la compra cuando quieras.
          </label>
        </b-col>
      </b-row>
      <!-- poleras -->
      <b-row>
        <b-col class="poleras text-rigth mb-5 mt-2">
          <label>POLERAS</label>
        </b-col>
      </b-row>
      <b-card-group deck>
        <b-card title="Polera estallido I" class="text-center">
          <b-card-img
            :src="require('../../src/assets/pro1.jpg')"
            img-alt="Image"
            img-top
            class="rounded-0"
          ></b-card-img>
          <b-card-text>Polera de algodón con ilustración de “Sigamos Unidos”</b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Precio: $10.990</small>
            <div>
              <b-button variant="danger">eliminar</b-button>|
              <b-button variant="success">Favorito</b-button>
            </div>
          </template>
        </b-card>

        <b-card title="Polera Mapuche I" class="text-center">
          <b-card-img
            :src="require('../../src/assets/pro2.jpg')"
            img-alt="Image"
            img-top
            class="rounded-0"
          ></b-card-img>
          <b-card-text>Polera de algodón con lustración de “Mapuche y su puma”.</b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Precio: $10.990</small>
            <div>
              <b-button variant="danger">eliminar</b-button>|
              <b-button variant="success">Favorito</b-button>
            </div>
          </template>
        </b-card>

        <b-card title="Polera Serena" class="text-center">
          <b-card-img
            :src="require('../../src/assets/pro3.jpg')"
            img-alt="Image"
            img-top
            class="rounded-0"
          ></b-card-img>
          <b-card-text>Polera de algodón con ilustración de “Redraw sailor moon”</b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Precio: $10.990</small>
            <div>
              <b-button variant="danger">eliminar</b-button>|
              <b-button variant="success">Favorito</b-button>
            </div>
          </template>
        </b-card>
      </b-card-group>
    </div>
    <!-- cuadros -->
    <div>
      <b-row>
        <b-col class="poleras text-rigth mb-5 mt-5">
          <label>CUADROS</label>
        </b-col>
      </b-row>
      <b-card-group deck>
        <b-card title="6 Cuadros Estallido Social" class="text-center">
          <b-card-img
            :src="require('../../src/assets/pro4.jpg')"
            img-alt="Image"
            img-top
            class="rounded-0"
          ></b-card-img>
          <b-card-text>Ilustracion digital con temática del estallido social en Chile, tecnica digital. Cuadros de madera y vidrio. Medidas: 60 x 90 cm.</b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Precio: $26.990</small>
            <div>
              <b-button variant="danger">eliminar</b-button>|
              <b-button variant="success">Favorito</b-button>
            </div>
          </template>
        </b-card>

        <b-card title="6 Cuadros Musas" class="text-center">
          <b-card-img
            :src="require('../../src/assets/pro5.jpg')"
            img-alt="Image"
            img-top
            class="rounded-0"
          ></b-card-img>
          <b-card-text>Ilustracion decorativa, mujeres de diferentes etnias. tecnica digital. Cuadros de madera y vidrio. Medidas: 60 x 90 cm.</b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Precio: $29.990</small>
            <div>
              <b-button variant="danger">eliminar</b-button>|
              <b-button variant="success">Favorito</b-button>
            </div>
          </template>
        </b-card>

        <b-card title="6 Cuadros Los elementos" class="text-center">
          <b-card-img
            :src="require('../../src/assets/pro6.jpg')"
            img-alt="Image"
            img-top
            class="rounded-0"
          ></b-card-img>
          <b-card-text>Ilustracion decorativa, mujeres que representan los elementos, Tecnica digital. Cuadros de madera y vidrio. Medidas: 80 x 90 cm.</b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Precio: $34.990</small>
            <div>
              <b-button variant="danger">eliminar</b-button>|
              <b-button variant="success">Favorito</b-button>
            </div>
          </template>
        </b-card>
      </b-card-group>
    </div>
    <!-- Libros -->
    <div>
      <b-row>
        <b-col class="poleras text-rigth mb-5 mt-5">
          <label>LIBROS</label>
        </b-col>
      </b-row>
      <b-card-group deck>
        <b-card title="Cicatriz" class="text-center">
          <b-card-img
            :src="require('../../src/assets/pro7.jpg')"
            img-alt="Image"
            img-top
            class="rounded-0"
          ></b-card-img>
          <b-card-text>Libro objeto ilustrado: Guía para reencontrarse y volver a amarse. Cuenta la experiencia de una niña que creció con una cicatriz en la cara y que sufrio abusos por verse diferente.</b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Precio: $15.990</small>
            <div>
              <b-button variant="danger">eliminar</b-button>|
              <b-button variant="success">Favorito</b-button>
            </div>
          </template>
        </b-card>

        <b-card title="Ciudad sin Estrellas" class="text-center">
          <b-card-img
            :src="require('../../src/assets/pro8.jpg')"
            img-alt="Image"
            img-top
            class="rounded-0"
          ></b-card-img>
          <b-card-text>
            Novela gráfica: En plena pandemia, la inestablididad social, sanitaria y económica despierta miedos y demonios que creímos haber dormido.
            <br />“Resiste ante la insertidumbre”.
          </b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Precio: $5.990</small>
            <div>
              <b-button variant="danger">eliminar</b-button>|
              <b-button variant="success">Favorito</b-button>
            </div>
          </template>
        </b-card>

        <b-card title="La resentida" class="text-center">
          <b-card-img
            :src="require('../../src/assets/pro9.jpg')"
            img-alt="Image"
            img-top
            class="rounded-0"
          ></b-card-img>
          <b-card-text>
            Novela ilustrada: El 18 de octubre del 2019, mi vida cambió para siempre. Desperté socialmente y no pude volver a ignorar la injusticia y desigualdad.
            <br />"Sin justicia no habrá paz".
          </b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Precio: $12.990</small>
            <div>
              <b-button variant="danger">eliminar</b-button>|
              <b-button variant="success">Favorito</b-button>
            </div>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;300&display=swap");

.text-muted {
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 3pt;
}

.favoritos {
  font-family: "Dosis", sans-serif;
}

label {
  font-family: "Dosis", sans-serif;
}

.titulo-productos {
  font-size: 25px;
  font-weight: bolder;
  letter-spacing: 10pt;
  text-decoration-line: line-through;
}

.subtitulo-productos {
  font-size: 22px;
}

.poleras {
  font-size: 25px;
  font-weight: bolder;
  letter-spacing: 5pt;
}
</style>
