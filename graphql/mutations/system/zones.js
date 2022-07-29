import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query zones ($id: Int) {
  zones (where: {id: {_eq: $id}}) {
    id
    created_at
    name
    updated_at
    type
    scope
    country
    code
  }
}`
    }
  }
}
