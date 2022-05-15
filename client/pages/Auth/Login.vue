<template>
  <section class="form4 cid-t58K4mPmcD mbr-fullscreen" id="form4-g">
    <div class="container-fluid">
      <div class="row content-wrapper justify-content-center">
        <div class="col-lg-3 offset-lg-1 mbr-form" data-form-type="formoid">
          <b-container>
            <h2 class="title has-text-centered" style="color:white;">Welcome back!</h2>

            <Notification :message="error" v-if="error" />
            <b-row>
              <b-col md="4" offset-md="4" class="mt-5">
                <FormulateForm method="post" @submit.prevent="login">
                  <div class="form-group">
                    <label for="email" style="color:white;">Email address</label>
                    <FormulateInput id="email" v-model="form.email" type="email" class="form-control"
                      aria-describedby="emailHelp" />
                  </div>
                  <div class="form-group">
                    <label for="password" style="color:white;">Password</label>
                    <FormulateInput id="password" v-model="form.password" type="password" class="form-control" />
                  </div>
                  <input type="hidden" name="_csrf" :value="csrfToken">
                  <FormulateInput type="submit">Login</FormulateInput>
                </FormulateForm>
                <div class="has-text-centered" style="margin-top: 20px">
                  <p style="color:white;text-align: center;">
                    Don't have an account? <nuxt-link to="/auth/register" style="color:lightblue;">Register</nuxt-link>
                  </p>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="col-lg-7 offset-lg-1 col-12">
          <div class="image-wrapper">
            <img class="w-100" src="/assets/images/mbr-1266x633.jpg" alt="AlternateCMS">
          </div>
        </div>
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
        form: {
          email: '',
          password: '',
          error: null
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
          await this.$auth.loginWith("local", {
            data: this.loginData
          });
          this.$router.push('/');
        } catch (e) {
          this.error = e.response.data.message;
        }
      },
    },
  };

</script>
