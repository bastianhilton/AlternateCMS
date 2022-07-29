import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query brands {
  brands {
    city
    code
    country
    createdAt
    description
    id
    isPublic
    media
    name
    nodeId
    product
    state
  }
}`
    }
  }
}