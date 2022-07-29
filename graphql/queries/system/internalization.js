import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query internalizations {
  internalizations {
    id
    name
    region
    website
    description
    default
    created_at
  }
}`
    }
  }
}
