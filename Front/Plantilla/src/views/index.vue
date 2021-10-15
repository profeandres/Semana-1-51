<template>
  <div>   
    <NavBar/>
    <!-- <nav-bar/> -->   

    <div id="Home" class="container mb-1">
    <hr />
      <b-row align-v="center">
      <b-col sm="6" md="6" lg="6">
        <b-card id="front-portada">    
          
          <h1 class="mb-4" >¿No sabes que ver?</h1>   
          <h1 class="mb-4" >Aca nuestras</h1>   
          <b-button size="lg" id="button_rec" to="/services" variant="dark">Recomendaciones</b-button>                
        </b-card> 
      </b-col>
        <b-col>
          <b-carousel 
            id="carousel-no-animation"
            style="text-shadow: 0px 0px 2px #000"
            :interval="6000"
          >

            <b-carousel-slide>
              <template #img>
                <img
                  class="template-block d-block img-fluid w-100"
                  width="512"
                  height="240"
                  src="@/assets/image1.jpg"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>
            <b-carousel-slide>
              <template #img>
                <img
                  class="template-block d-block img-fluid w-100"
                  width="512"
                  height="240"
                  src="@/assets/image2.jpg"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>
            <b-carousel-slide 
              caption="First Slide"
              >
              <template #img>
                <img
                  class="template-block d-block img-fluid w-100"
                  width="512"
                  height="240"
                  src="@/assets/image3.jpg"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>            
          </b-carousel>
        </b-col>
      </b-row>
      
    <hr />
    </div>
    
    <div class="container mt-5">      
      <section id="section1" >
        <h1 class="mb-4 align-items-center">Servicios</h1>
        <b-row justify="space-around">
          <b-col  sm="6" md="4" lg="4">
            <img class="d-block img-fluid w-100" src="@/assets/iconoServicio1.svg" alt="a">
            <b-card
              title="Lo mejor de cada género"
              tag="article"
              class="cards mb-2"
            >                
              <b-card-text>
                Te ayudamos a encontrar peliculas de la categoría de tu preferencia.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="4">
            <img class="d-block img-fluid w-100" src="@/assets/iconoServicio2.svg" alt="a">
            <b-card
              title="Recomendaciones Bash"
              img-top
              tag="article"
              class="cards mb-2"
            >
              <b-card-text>
                Te proponemos peliculas de diferentes generos escogidas por nosotros mismos.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="4">
            <img class="d-block img-fluid w-100" src="@/assets/iconoServicio3.svg" alt="a">
            <b-card
              title="Más vistas"
              tag="article"
              class="cards mb-2"
            >
              <b-card-text>
                Te damos a conocer las películas más populares.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
        </b-row>

    <hr />

      </section>
      <section id="section2" class="mt-5">

        <h1 class="mb-4">Noticias</h1>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <b-card
              title="DUNE"
              class="cardn mb-2"
            >  
              <img class="imgn d-block img-fluid w-100" src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/09/dune_denis_villeneuve_2.jpg?resize=1200%2C800&ssl=1"
                     align="right" width="550" height="400" alt="">          
              <b-card-text>
                Nos alegra poder decirle a los espectadores que tienen muchas ganas de ver la nueva ‘Dune’, de Denis Villeneuve, que esta es la adaptación de la novela de Frank Herbert que estábamos esperando. - Hipertextual.
              </b-card-text>

              <b-button href="https://hipertextual.com/2021/09/dune-denis-villeneuve-critica" variant="primary">Leer mas</b-button>
            </b-card>
          </b-col>
          <b-col sm="12" md="6" lg="6">
            <b-card
              title="El Tubo"
              class="cardn mb-2"
            >
              <img class="imgn d-block img-fluid w-100" src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/09/el-tubo.jpg?resize=1200%2C811&ssl=1"
                    width="550" height="400"  alt="">
              <b-card-text>
                La cualidad de El Tubo para sorprender llega a su punto y de hecho se sostiene sobre un recorrido singular hacia un final desconcertante. ¿Es toda la estructura una lucha para sobrevivir, una prueba de fortaleza o algo peor?. -Hipertextual.
              </b-card-text>

              <b-button href="https://hipertextual.com/2021/09/el-tubo-critica-pelicula-de-terror" variant="primary">Leer mas</b-button>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12" md="6" lg="6">
            <b-card
              title="Robert Oppenheimer"
              class="cardn mb-2"
            >
              <img class="imgn d-block img-fluid w-100" src="https://i.blogs.es/c52bb5/diseno-sin-titulo-4-/1366_2000.jpeg" 
                     width="550" height="400" alt="">
              <b-card-text>
                La nueva película del director de 'Tenet' y 'Origen', abordará de nuevo el mundo de la II Guerra Mundial. Será una película sobre la vida del que fue conocido como "el padre de la bomba atómica", J. Robert Oppenheimer -Deadline.
              </b-card-text>

              <b-button href="https://es.digitaltrends.com/entretenimiento/christopher-nolan-pelicula-nomba-atomica-oppenheimer/" variant="primary">Leer mas</b-button>
            </b-card>
          </b-col>
          <b-col sm="12" md="6" lg="6">
            <b-card
              title="Shang-Chi"
              class="cardn mb-2"   
            >
              <img class="imgn d-block img-fluid w-100" src="https://media.revistagq.com/photos/60d59fb654e0443ce59c73ec/16:9/w_2560%2Cc_limit/Shang-Chi-Trailer.jpeg" 
                    width="550" height="400" alt="noticias">
              <b-card-text>
                'Shang-Chi y la leyenda de los Diez Anillos': el kung fu puede transformar la acción Marvel, y este es un primer paso. Se abre una vía para la forma de visualizar la acción en el cine de superhéroes en la que la propia Marvel se había estancado. -Xataka.
              </b-card-text>

              <b-button href="https://www.xataka.com/cine-y-tv/shang-chi-leyenda-diez-anillos-cine-artes-marciales-puede-transformar-accion-marvel-este-primer-paso" variant="primary">Leer mas</b-button>
            </b-card>
          </b-col>
        </b-row>
      
      <hr />

      </section>
      <section id="section3" class="mt-5">

        <h1 class="mb-4">Equipo</h1>
        <b-row class="rowi">
          <b-col sm="6" md="4" lg="3">
            <b-card
              tag="article"
              class="mb-2"
            >
              <h3>Andrés Cantillo</h3>
              <b-card-text>
                Soy de la ciudad de Barranquilla, estudié licenciatura en matemáticas. Entre mis pasatiempos esta llenar sudokus y ver peliculas de accion y suspenso como Jurasic Park, Resident Evil y Silent Hill.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              tag="article"
              class="mb-2"
            >
              <h3>Camila Pacheco</h3>
              <b-card-text>
                Soy de la ciudad de Popayán, estudio Ingenieria Electrónica en la Universidad del Cauca y en mis ratos libres me gusta leer y peliculas romance y drama como El diario de Noah y la razon de estar contigo.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              tag="article"
              class="mb-2"
            >
              <h3>Melissa Galvez</h3>
              <b-card-text>
                Soy de la ciudad de Popayán, estudio Administración de Empresas en la Universidad del Cauca. En mis ratos libres pinto y veo peliculas de animacion o suspenso como El Viaje de Chihiro o Interstellar.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              tag="article"
              class="mb-2"
            >
            <h3>Wilmer Camargo</h3>
              <b-card-text>
                
                Soy del municipio de Soacha, estudié Economía en el Colegio Mayor de Cundinamarca. Entre mis pasatiempos esta ver peliculas comedia o drama como About Time y Shawshank Redemption.
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </section>
    </div>

    <transition name="fade">
      <a v-if="!isVisibleUpButton" href="#" class="back-to-top"><b-icon-arrow-up-circle-fill font-scale="3"></b-icon-arrow-up-circle-fill></a>
    </transition>

    <footer class="footerop d-flex text-light align-items-center px-3 py-2">
      <div class="text-center w-100">
        <b-row class="justify-content-md-center">
          <b-col sm="6" md="3" lg="6">
            <h6>Copyright © 2021 Bash All Rights Reserved.</h6>
          </b-col>
          <b-col sm="6" md="3" lg="2">
            <h6>Private Notice</h6>
          </b-col>
          <b-col sm="6" md="3" lg="2">
            <h6>Legal</h6>
          </b-col>
          <b-col sm="6" md="3" lg="2">
            <h6>Cookie Policy</h6>
          </b-col>
        </b-row>

      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from '../components/navbar.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      isVisibleUpButton: true,
      scrollPosition: 0
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  watch: {
    scrollPosition() {
      if (this.scrollPosition > 100) {
        this.isVisibleUpButton = false;
      } else {
        this.isVisibleUpButton = true;
      }
    }
  }
}
</script>
<style>
.back-to-top {
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
}

#front-portada{ 
  color: white;
  background-color: transparent;
  font-size: 4rem;
  text-align:left;
}

#front-portada h1{
  font-size: 3rem;
  font:larger;
}

#front-portada h2{
  font-size: 2.5rem;
}

#button_rec {
  padding: 0px 25px;
  background-color: rgb(238, 252, 20);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  font-family: 'Montserrat', sans-serif;
  color:black;
  font-size: 2.5rem;
  text-decoration: none;
}

button:hover {
  background-color: rgb(238, 252, 46);
}

.template-block{  
  height: 750px;
  object-fit: contain;
  margin: 0 auto;
  background-color: black;
}

hr{
  background-color:white;
}

#section1 h1{
  padding: 0px 25px;
  color:white;
  background-color: #F65058FF;
  display:block;
  max-width: min-content;
  border-radius: 50px;
}

.cards{
  color: white;
  background-color: black;
}

.cardn{
  color: white;
  background-color: #28334AFF;
}

.imgn{
  margin-bottom: 20px;
  border-radius: 50px;
}

#section2 h1{
  padding: 0px 25px;
  color:white;
  background-color: #FBDE44FF;
  display:block;
  max-width: min-content;
  border-radius: 50px;
}

#section3 div{  
  color:white;
  background-color: black;
}

#section3 h3{
  color:#F65058FF;
}

#section3 h1{
  padding: 0px 25px;
  color:white;
  background-color: #28334AFF;
  display:block;
  max-width: min-content;
  border-radius: 50px;
}

.footerop{
  background-color: #F65058FF ;
}

</style>