import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query agreements($id: Int) {
  users(where: {id: {_eq: $id}}) {
    id
    first_name
    email
    created_at
    interface_locale
    last_name
    password
    permissions
    username
    value
  }
}`
    }
  }
}
