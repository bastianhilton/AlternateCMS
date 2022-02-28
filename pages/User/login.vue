<template>
  <b-container>
    <b-row>
      <b-col md="4" offset-md="4" class="mt-5">
        <FormulateForm method="POST" @submit.prevent="handleLoginSubmit">
          <div class="form-group">
            <label for="email">Email address</label>
            <FormulateInput
              id="email"
              v-model="form.email"
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <FormulateInput
              id="password"
              v-model="form.password"
              type="password"
              class="form-control"
            />
          </div>

          <FormulateInput type="submit" :disabled="formBusy">
            <b-spinner v-if="formBusy" small class="mr-2" /> Login
          </FormulateInput>
        </FormulateForm>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  middleware: 'auth',

  auth: 'guest',

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
    async handleLoginSubmit() {
      const credentials = this.form
      this.formBusy = true

      try {
        // Using our custom strategy 
        await this.$auth.loginWith('graphql', credentials)

        this.formBusy = false
      } catch (errors) {
        this.formBusy = false
        // Handle errors
      }
    },
  }
}
</script>