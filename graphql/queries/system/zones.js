import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query zones {
  zones {
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
