import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query manufacturers {
  manufacturers {
    state
    product
    nodeId
    name
    media
    isPublic
    id
    description
    createdAt
    country
    code
    city
  }
}`
    }
  }
}