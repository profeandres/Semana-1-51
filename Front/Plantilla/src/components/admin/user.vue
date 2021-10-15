<template>
  <div>
    <h1>Lista de Usuarios</h1>
    <div class="mb-3 text-left">
      <b-button v-b-modal.modal-1 variant="outline-primary">Crear nuevo usuario</b-button>
      <b-modal id="modal-1" title="Creando nuevo usuario" hide-footer>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Correo electronico"
            label-for="input-1"
            description="Nunca compartiremos tu email con nadie más"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Ingresar email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Nombre Película:  " label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Ingresar pelicula"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Categoria:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.food"
              :options="foods"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              v-model="form.checked"
              id="checkboxes-4"
              :aria-describedby="ariaDescribedby"
            >
              <b-form-checkbox value="me">Check me out</b-form-checkbox>
              <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="primary" class="mr-2">Aceptar</b-button>
          <b-button type="reset" variant="danger">Limpiar</b-button>
        </b-form>
      </b-modal>
    </div>
    <div>
      <b-table striped hover :items="items"></b-table>
    </div>
  </div>
</template>
<script>


import axios from 'axios'
  export default {
    data() {
      return {
        title: 'Creando nuevo usuario',
        items: [],
        form: {
          email: '',
          name: '',
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Acción', 'Terror', 'Comedia', 'Drama'],
        show: true
      }
    },

    created( ){
      axios.get('localhost:3000/user')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    },



    methods: {
      onSubmit(event) {
        event.preventDefault()
        // alert(JSON.stringify(this.form)) 
        this.$swal('Hello Vue world!!!')
        this.$swal({
          position: 'top-end',
          icon: 'success',
          title: 'Tu pelicula se ha guardado exitosamente',
          showConfirmButton: false,
          timer: 2000
        })

        axios.put(`localhost:3000/user`, this.form)
          .then(res => {
            //console.log(res)
            this.$swal({
              icon: 'success',
              title: res.data.message,
              showConfirmButton: false,
              timer: 2000
            })
            this.$refs['modal-1'].hide()
            this.limpiar()
            axios.get('localhost:3000/user')
            .then(res => {
              this.items = res.data.users
            })
            .catch(err => {
              console.error(err);
            })              
          })
          .catch(err => {
            console.error(err); 
          })      
        },else :
          axios.post('localhost:3000/user', this.form)
          .then(res => {
            //console.log(res)
            this.items.push(res.data.user)
            this.$swal({
              icon: 'success',
              title: res.data.message,
              showConfirmButton: false,
              timer: 2000
            })
            this.$refs['modal-1'].hide()
            this.limpiar()
          })
          .catch(err => {
            console.error(err); 
          }),

        DeleteUser() {
        this.$swal({
          title: '¿Esta seguro?',
          text: "No podra deshacer esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminar!'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`localhost:3000/user`)
            .then(res => {
              axios.get('localhost:3000/user')
              .then(res => {
                this.items = res.data.users
              })
              .catch(err => {
                console.error(err);
              })   
              this.$swal({
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 2000
              })
            })
            .catch(err => {
              console.error(err); 
            })            
          }
        })
      }

      }, 
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
        
    }
  


  

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap');
</style>

<style>
  .items{
    background: black;
  }

  h1{
    color: white;
    font-family:'Lato', sans-serif;
  }
</style>