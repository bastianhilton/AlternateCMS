<template>
  <b-container>
    <b-row>
      <b-col md="4" offset-md="4" class="mt-5">
        <FormulateForm @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email address</label>
            <FormulateInput id="email" v-model="form.email" type="email" class="form-control"
              aria-describedby="emailHelp" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <FormulateInput id="password" v-model="form.password" type="password" class="form-control" />
          </div>

          <FormulateInput type="submit">Login</FormulateInput>
        </FormulateForm>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        formBusy: false,
      }
    },
    head: {
      title: 'Login'
    },

    methods: {
      async login() {
        try {
          const response = await this.$auth.loginWith("local", {
            data: this.loginData
          });
          this.$router.push("/");
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

</script>
