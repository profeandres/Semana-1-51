<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">      
      <img src="https://img.icons8.com/color-glass/96/000000/starred-ticket.png" alt="BASH LOGO">
      <b-navbar-brand href="#">BASH</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item href="#section1">Seccion 1</b-nav-item>
          <b-nav-item href="#section2">Seccion 2</b-nav-item> -->
          <!-- <router-link class="nav-link" to="/services">Servicio</router-link> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"> 
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <!--  <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item class="nav-link" to="/index.vue">Inicio</b-nav-item>
          <b-nav-item class="nav-link" to="/">Servicios</b-nav-item>
          <b-nav-item class="nav-link" to="/">Noticias</b-nav-item>
          <b-nav-item class="nav-link" to="/">Equipo</b-nav-item>
          <b-nav-item class="nav-link" to="/login">Acceder</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  
</template>
<style scoped>
  .navbar.navbar-dark.bg-dark{
    background-color:#F65058FF!important;
  }

  .navbar-dark .navbar-nav .nav-link{
    color: white;
  }

  .navbar-dark .navbar-nav .nav-link>a:hover {
    font-weight: bold;
    color: #FBDE44FF;
  }

</style>