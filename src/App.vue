<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div>
        <img :src="images.rethama" />
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <template v-if="user">
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav></b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>{{user.email}}</em>
              </template>
              <b-dropdown-item v-b-toggle.sidebar-1>
                <b-icon-star></b-icon-star>
                <a>¡Temporada de Fanarts!</a>
              </b-dropdown-item>
              <b-dropdown-item @click.prevent="cargarPerfil">
                <b-icon-heart></b-icon-heart>
                <a>Mis Favoritos</a>
              </b-dropdown-item>
              <b-dropdown-item @click.prevent="logout">
                <b-icon-power></b-icon-power>
                <a>Cerrar sesión</a>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </template>
    </b-navbar>
    <div id="nav">
      <router-link to="/">HOME</router-link>|
      <template v-if="user">
        <router-link to="/productos">PRODUCTOS</router-link>
      </template>
      <template v-else>
        <router-link to="/login">LOGIN</router-link>
      </template>
    </div>
    <router-view />
    <div>
      <div class="fluid-container footer pie">
        <b-container fluid class="bv-example-row">
          <b-row align-h="around">
            <div class="footerlogo">
              <b-col lg="2" md="2" sm="6" class="text-center">
                <img :src="images.lfooter" style="height:160px" />
              </b-col>
            </div>
            <div class="footerrrss">
              <b-col lg="9" md="10" sm="6" class="text-center">
                <b-container fluid class="bv-example-row label-footer my-0">
                  <b-row>
                    <b-col>
                      <label>
                        <a href="https://www.facebook.com/rethamailustra">FACEBOOK</a>
                      </label>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <label>
                        <a href="https://www.instagram.com/elizabeth_rethama">INSTAGRAM</a>
                      </label>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <label>
                        <a href="https://www.behance.net/rethama">BEHANCE</a>
                      </label>
                    </b-col>
                  </b-row>
                </b-container>
              </b-col>
            </div>
          </b-row>
        </b-container>
      </div>
    </div>
    <div>
      <ListaPeliculas />
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import axios from "axios";
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import ListaPeliculas from "@/components/ListaPeliculas.vue";
import { mapState, mapActions } from "vuex";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

export default {
  components: {
    ListaPeliculas
  },
  data() {
    return {
      selected: [],
      isOpen: false,
      user: "",
      peliculas: [],
      images: {
        sample: require("./assets/logo.png"),
        rethama: require("./assets/logoRethama.png"),
        portada: require("./assets/portada.jpg"),
        lfooter: require("./assets/Lfooter.png")
      }
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
    },
    cargarPerfil() {
      this.$router.push("/perfil");
    },
    ...mapActions(["cargarUser"])
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        this.cargarUser(user)
      } else {
        this.user = null;
      } 
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;300&display=swap");

.navbar.navbar-dark.bg-dark {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(1, 72, 119, 1) 0%,
    rgba(136, 240, 255, 1) 0%,
    rgba(236, 158, 245, 1) 100%,
    rgba(229, 109, 237, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
}

#nav {
  padding: 30px;
  text-align: center;
  font-family: "Dosis", sans-serif;
  font-weight: bold;
  font-size: 22px;
  letter-spacing: 3px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #e56ded;
}

.label-footer {
  font-family: "Dosis", sans-serif;
  font-size: 20px;
  font-weight: bold;
}

.pie {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(1, 72, 119, 1) 0%,
    rgba(136, 240, 255, 1) 0%,
    rgba(236, 158, 245, 1) 100%,
    rgba(229, 109, 237, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
}

.fluid-container.footer {
  height: 210px;
}
.fluid-container.footer > *:last-child {
  margin-bottom: 0px;
  color: #fff;
  height: 210px;
}

a {
  color: white;
}

@media screen and (max-width: 796px) {
  .footerrrss {
    display: none;
  }
}
</style>

