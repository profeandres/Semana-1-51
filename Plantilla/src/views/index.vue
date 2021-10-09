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
    </div>
    
    <div class="container mt-5">      
    <hr />
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
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://placekitten.com/1000/300"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://placekitten.com/1000/300"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://placekitten.com/1000/300"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://placekitten.com/1000/300"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"              
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
        </b-row>
      
      <hr />

      </section>
      <section id="section3" class="mt-5">



        <h1 class="mb-4">Equipo</h1>
        <b-row>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://placekitten.com/1000/300"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://placekitten.com/1000/300"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://placekitten.com/1000/300"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://placekitten.com/1000/300"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
        </b-row>
      </section>
    </div>
    <transition name="fade">
      <a v-if="!isVisibleUpButton" href="#" class="back-to-top"><b-icon-arrow-up-circle-fill font-scale="3"></b-icon-arrow-up-circle-fill></a>
    </transition>
    <footer class="d-flex bg-dark text-light align-items-center px-3 py-2">
      <div class="text-center w-100">
        <strong class="mr-auto">Footer</strong>
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

#section2 h1{
  padding: 0px 25px;
  color:white;
  background-color: #FBDE44FF;
  display:block;
  max-width: min-content;
  border-radius: 50px;
}

#section3 h1{
  padding: 0px 25px;
  color:white;
  background-color: #28334AFF;
  display:block;
  max-width: min-content;
  border-radius: 50px;
}

</style>