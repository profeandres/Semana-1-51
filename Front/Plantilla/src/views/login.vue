<template>
  <div id="building" class="login">
    <div class="mt-5 login-content">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <img src="https://img.icons8.com/color-glass/96/000000/starred-ticket.png" alt="BASH LOGO">
        <b-form-group
          id="input-group-1"
          label="Correo electronico:"
          label-for="input-1"
          description="Nunca compartiremos tu email."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Ingresar email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            type="password"
            required
          ></b-form-input>
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

        <b-button type="submit" variant="warning" class="mr-2">Registrar</b-button>
        <b-button type="reset" variant="dark">Regresar</b-button>
      </b-form>      
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
        this.$router.push('admin')
      },
      onReset(event) {
        event.preventDefault()
        this.$router.push('/')
      }
    }
  }
</script>
<style>

body{  
  height: 750px;
  object-fit: contain;
  margin: 0 auto;
  background-color: black;
  }

.login {
  display: flex;
  justify-content: center;
  align-content: center;
}

.login .login-content{
  background-color: #F65058FF;
  color: white;
  padding: 15px;
  max-width: 400px;
  border-radius: 10px;
}

#building{
  background:url("https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80");
  width:100%;			
  height:100%;		
  position: fixed;
  background-size:100% 100%;
  align-items: center;
}
</style>