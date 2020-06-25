
<template>
  <div class="login text-center m-5 p-5">
    <div>
      <b-card-group lg="3" md="2" sm="12" deck>
        <b-card header="Inicia Sesión" title="Si ya cuentas con un perfil, ingresa tus datos aquí:">
          <b-form @submit.stop.prevent="login">
            <div>
              <label for="feedback-user" >Email</label>
              <b-input v-model="email" id="feedback-user" required type="email"></b-input>
            </div>
            <div>
              <label for="text-password">Contraseña</label>
              <b-input
                v-model="password"
                type="password"
                id="text-password"
                aria-describedby="password-help-block"
                required
              ></b-input>
              <template v-if="userNOk">
                <div>
                  <label class="div-userNOk">Su email o contraseña no existen o están incorrectos. Favor Reintentar.</label>
                </div>
              </template>
            </div>
            <b-card-text></b-card-text>
            <b-button class="button" type="submit">Entrar</b-button>
          </b-form>
        </b-card>
        <!--REGISTRO-->
        <b-card header="Registrate" title="¿Eres nuevo? crea una cuenta:">
          <b-form @submit.stop.prevent="register">
            <div>
              <label for="feedback-user">Nombre de usuario</label>
              <b-input v-model="nameRegister" id="register-user" required></b-input>
            </div>
            <div>
              <label for="text-password">Email</label>
              <b-input v-model="emailRegister" id="correo-register" required type="email"></b-input>
              <label for="text-password">Contraseña</label>
              <b-input
                v-model="passwordRegister"
                type="password"
                id="password-register"
                aria-describedby="password-help-block"
                required
              ></b-input>
            </div>
            <b-card-text></b-card-text>
            <b-button class="button" type="submit">Crear cuenta</b-button>
          </b-form>
        </b-card>
        <!--REGISTRO-->
        <div>
          <div class="bg-portada"></div>
        </div>
      </b-card-group>
    </div>
    <div>
      <img :src="images.Flogin" class="bg-portada" />
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      nameRegister: "",
      emailRegister: "",
      passwordRegister: "",
      email: "",
      password: "",
      userId: "",
      error: "",
      userNOk: false,
      images: {
        Flogin: require("../../src/assets/fondologin.jpg")
      }
    };
  },
  methods: {
    register() {
      if (this.nameRegister && this.emailRegister && this.passwordRegister) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.emailRegister,
            this.passwordRegister
          )
          .then(user => {
            this.nameRegister = "";
            this.emailRegister = "";
            this.passwordRegister = "";
            console.log(user);
            this.$router.push("/productos");
          })
          .catch(err => {
            this.error = err.message;
          });
        //enviamosFormulario
      } else {
        alert("error");
      }
    },
    login() {
      this.userNOk = false;
      this.error = "";
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            if (user) {
              this.$router.push("/productos");
            } else {
              this.userNOk = true;
            }
          })
          .catch(err => {
            //this.error = err.message;
            this.userNOk = true;
          });
      } else {
        alert("error");
      }
    }
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;300&display=swap");

.bg-portada {
  width: 100%;
}

.btn {
  color: white;
}
label {
  font-family: "Dosis", sans-serif;
  color: violet;
}
.btn {
  background-color: violet;
}

.card-header {
  background-color: plum;
  font-family: "Dosis", sans-serif;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.card-title {
  font-family: "Dosis", sans-serif;
}

.div-userNOk{
  color:red;
  font-weight: bolder;
}
</style>