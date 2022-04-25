<template>
  <b-container>
    <b-row>
      <b-col md="4" offset-md="4" class="mt-5">
        <FormulateForm @submit.prevent="register">
          <div class="form-group">
            <label for="firstname">First Name</label>
            <FormulateInput id="firstName" v-model="registerData.firstname" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="lastname">Last Name</label>
            <FormulateInput id="lastname" v-model="registerData.lastname" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <FormulateInput id="email" v-model="registerData.email" type="email" class="form-control" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <FormulateInput id="password" v-model="registerData.password" type="password" class="form-control" />
          </div>

          <FormulateInput type="submit">Register</FormulateInput>
        </FormulateForm>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        registerData: {
          firstname: '',
          lastname: '',
          email: '',
          password: '',
        },
      }
    },
    head: {
      title: 'Register'
    },
    methods: {
      async register() {
        try {
          const user = await this.$axios.$post("/api/auth/signin", {
            firstname: this.registerData.firstname,
            lastname: this.registerData.lastname,
            email: this.registerData.email,
            password: this.registerData.password
          });
          console.log(user);
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
</script>
