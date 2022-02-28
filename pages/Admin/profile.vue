<template>
  <div v-if="profile">
    Hello <b style="color:red">{{ profile.fullname }}</b> you're at your profile page
    <hr />
    This is your information:
    <br /><br />
    <table class="table table">
      <thead>
        <tr>
          <th>ID</th>
          <th>FullName</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ profile.id }}</td>
          <td>{{ profile.fullname }}</td>
          <td>{{ profile.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
   data: () => ({
    profile: null,
    submitted: false,
    email: ''
  }),
  methods: {
    async signOut() {
      /* signOut deletes the user's session */
      await this.$supabase.auth.signOut()
      this.profile = null
    },
    async signIn() {
      /* signIn sends the user a magic link */
      const { email } = this
      if (!email) return
      // eslint-disable-next-line no-unused-vars
      const { error, data } = await this.$supabase.auth.signIn({
        email
      })
      this.submitted = true
    },
  }, 
  // eslint-disable-next-line vue/order-in-components
  async mounted() {
    /* when the component loads, fetch the user's profile */
    const profile = await this.$supabase.auth.user()
    this.profile = profile
  } 
}
</script>

<style></style>
