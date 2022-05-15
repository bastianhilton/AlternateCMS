<template>
  <section id="form3-f" class="form3 cid-t58In2B9NA mbr-fullscreen">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-12" style="height:100%;">
          <div class="image-wrapper" style="height:100%;">
            <img class="w-100" src="/assets/images/mbr-1802x1230.jpg" alt="AlternateCMS" style="height:100%;">
          </div>
        </div>
        <div class="col-lg-3 offset-lg-1 mbr-form" data-form-type="formoid">
          <b-container>
            <div class="col-lg-12 col-md-12 col-sm-12">
              <h1 class="mbr-section-title mb-4 display-2">
                <strong>Create An Account</strong></h1>
            </div>
            <Notification v-if="error" :message="error" />
            <b-row>
              <b-col md="4" offset-md="4" class="mt-5">
                <FormulateForm method="post" @submit.prevent="register">
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
                    <FormulateInput id="password" v-model="registerData.password" type="password"
                      class="form-control" />
                  </div>
                  <input type="hidden" name="_csrf" :value="csrfToken">
                  <FormulateInput type="submit" style="width:100%">Register</FormulateInput>
                </FormulateForm>
                <div class="has-text-centered" style="margin-top: 20px;text-align:center;">
                  Already got an account? <nuxt-link to="/auth/login">Login</nuxt-link>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="offset-lg-1"></div>
      </div>
    </div>
  </section>
</template>

<script>
  import Notification from '~/components/Notification';
  export default {
    components: {
      Notification,
    },
    layout: 'nologin',
    auth: false,
    middleware: 'guest',
    data() {
      return {
        registerData: {
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          error: null
        },
      }
    },
    head: {
      title: 'Register'
    },
    /* async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.log(e);
    }
  }, */
    methods: {
      async register() {
        try {
          await this.$axios.$post("register", {
            firstname: this.registerData.firstname,
            lastname: this.registerData.lastname,
            email: this.registerData.email,
            password: this.registerData.password
          });
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            },
          });
          this.$router.push('/');
        } catch (e) {
          this.error = e.response.data.message;
        }
      },
      /* async onSubmit() {
      try {
        const token = await this.$recaptcha.execute('login')
        console.log('ReCaptcha token:', token)
      } catch (error) {
        console.log('Login error:', error)
      }
    }, */
    }
  };

</script>
