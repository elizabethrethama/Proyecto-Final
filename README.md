Sitio Web Ilustrador Elizabeth Rethama
Proyecto final Desarrollo Front End

Descripción del proyecto:

La finalidad de este proyecto es crear un sitio web completo y dinámico de una marca en particular, en este caso de Elizabeth Rethama como ilustrador/diseñador. 
En él se expondrán sus trabajos como portafolio, una sección para mostrar los productos que estarán a la venta y generar línea de comunicación abierta con el autor.

Objetivos (usuarios): 

Permitirá a los potenciales clientes conocer el trabajo del autor y acceder a los productos que este vende, coleccionar productos dentro de una lista, y contactarse con el autor.

Requerimientos.

La aplicación debe utilizar:

-Vue, Vue router y Vuex.

-Librería de componentes para el desarrollo de la interfaz, esta puede ser Buefy, element UI, Bootstrap-Vue.

-Presentar como mínimo 3 vistas con un flujo básico de interacción.

-Página Principal: Portafolio e información.

-Página de Login: El usuario puede ingresar.

-Página de Productos: Usuario puede ver los productos. 

-Diseñar un portafolio visual tipo carusel donde los usuarios puedan mirar los trabajos más destacados del autor.

-Generar la opción de login dentro de la página web, para armar un listado de favoritos que el usuario pueda agregar o quitar de su lista, en este paso, se consume una api
de los Studios Ghibli y se pregunta a través de una encuesta cuales son los films preferidos del usuario, esta información será guardada en el store. 


Vistas del sitio web:

Página Principal:

Navbar con el logo de la empresa, y un menú sándwich con opción de login, favoritos, encuesta y cerrar seción.
Portada principal con el logo de la empresa.
breve reseña y experiencia laboral del autor.
Portafolio tipo carrusel con sus obras más conocidas.
tienda con productos a la venta.
footer con links a RRSS.

Página de Login:

Permite al usuario crear un perfil con correo electrónico y una contraseña o ingresar si ya posee una cuenta existente.

Página de mis favoritos:

Basandose en la encuesta de Fanarts de temporada, se creará una vista de la lista de los favoritos del usuarios, se guardarán en una colección, con la opción de eliminar o agregar productos.

Página de Encuesta Dibujistica:

Sidebar que aparece luego de la opción del menú de login del usuario al iniciar sesión. Esta posee una encuesta sobres la peliculas favoritas del usuario para sugerencias de fanarts del mes.

- [ ] Diagrama de flujo:
![Diagrama de flujo 2](https://user-images.githubusercontent.com/60222751/84966746-4a10cf80-b0e0-11ea-9aab-b8bba4f78a09.jpg)

Diseño y paleta de colores:
- [ ] Fuente de Google fonts: 'Dosis', sans-serif Extra-light 200, Light 300, Regular 400.
  <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400&display=swap" rel="stylesheet">


Mockup Vistas:

- [ ] Vista página principal.

![mockap pagina principal](https://user-images.githubusercontent.com/60222751/85234815-1da9cb80-b3de-11ea-9159-12eb93b820e4.jpg)

- [ ] Vista página de login.

![mockap pagina login](https://user-images.githubusercontent.com/60222751/85234823-3c0fc700-b3de-11ea-8798-27e891cfbc9d.jpg)

- [ ] Vista página de productos.

![mockap pagina productos](https://user-images.githubusercontent.com/60222751/85234917-ed166180-b3de-11ea-9550-6c9bf1c78221.jpg)

- [ ] Vista Slider de encuesta.

![encuesta](https://user-images.githubusercontent.com/60222751/85774905-4804cd00-b6ed-11ea-91ca-778a59510e93.JPG)

- [ ] Vista pagina favoritos.

![favoritos](https://user-images.githubusercontent.com/60222751/85775002-610d7e00-b6ed-11ea-9122-76ba586ed8b9.JPG)


Usuarios Firebase:

- [ ] usuario.uno@gmail.com pass: 123456

- [ ] usuario.dos@gmail.com pass: 654321

- [ ] Project setup: npm install
- [ ] Compiles and hot-reloads for development: npm run serve
- [ ] Compiles and minifies for production: npm run build
- [ ] Lints and fixes files: npm run lint
- [ ]Customize configuration: See Configuration Reference.
