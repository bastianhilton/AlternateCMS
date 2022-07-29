import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query cities {
  cities {
    country
    description
    id
    image
    name
    nodeId
    postalCode
    state
  }
}`
    }
  }
}