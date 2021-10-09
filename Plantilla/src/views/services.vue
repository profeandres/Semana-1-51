<template>
  <div class="primero">
    <NavBar/>
    <h1>pagina servicios</h1>
    <h3>Descripción de servicios</h3>
    <span></span>

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
      variable: "soy variable",

    }
  },
  methods: {
    guardar() {
      console.log('ejecutanto...')
    }
  },
}
</script>
