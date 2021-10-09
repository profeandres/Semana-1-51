<template>
  <div class="admin">
    <b-nav :class="[ !visibleSidebar ? 'd-none' : '' ]" vertical class="sidebar-content">
      <div>
        <h1>Menu</h1>
      </div>
      <b-nav-item @click="changeOption(1)" :class="[ option==1 ? 'active' : '']">Categorias</b-nav-item>
      <b-nav-item @click="changeOption(2)" :class="[ option==2 ? 'active' : '']">Articulos</b-nav-item>
      <b-nav-item @click="changeOption(3)" :class="[ option==3 ? 'active' : '']">Usuarios</b-nav-item>
      <b-nav-item @click="changeOption(3)" :class="[ option==3 ? 'active' : '']">Otro item</b-nav-item>
    </b-nav>
    <div class="content-custom">
      <b-navbar type="dark" variant="dark">
        <div class="d-flex align-items-center mr-3">
          <span @click="isVisibleSidebar" class="navbar-toggler-icon"></span>
        </div>
        <b-navbar-nav>          
          <router-link to="/" class="nav-link">Home</router-link>          
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item><router-link to="/login">logout</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
      <div class="container-fluid">
        <div class="m-5">
          <Category v-if="option == 1"/>
          <Article v-else-if="option == 2"/>
          <User v-else-if="option == 3"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Category from '../components/admin/category.vue'
import Article from '../components/admin/article.vue'
import User from '../components/admin/user.vue'
export default {
  components: {
    Category,
    Article,
    User
  },
  data() {
    return {
      option: 1,
      visibleSidebar: true
    }
  },
  methods: {
    changeOption(i) {
      this.option = i
    },
    isVisibleSidebar() {
      this.visibleSidebar = !this.visibleSidebar
    }
  },
}
</script>
<style>
  .admin {
    display: flex;
  }
  .admin .sidebar-content {
    background-color: azure;
    width: 300px;
    height: 100vh;
  }
  .admin .sidebar-content h1 {
    border-bottom: 1px solid black;
    margin-bottom: unset;
  }
  .admin .sidebar-content .nav-item .nav-link {
    color: black;
  }
  .admin .sidebar-content .nav-item :hover {
    background-color: blue;
  }
  .admin .content-custom {
    width: 100%;
  }
  .admin .content-custom .navbar {
    height: 49px;
  }
  .active {
    background-color: rgb(167, 167, 255);
  }
  .dropdown-item a {
    color: #212529;  
  }
  a :hover {
    text-decoration: none;
  }
</style>