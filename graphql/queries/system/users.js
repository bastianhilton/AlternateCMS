import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query users {
  users {
    id
    first_name
    email
    created_at
    last_name
    interface_locale
    password
    permissions
    username
    value
  }
}`
    }
  }
}
