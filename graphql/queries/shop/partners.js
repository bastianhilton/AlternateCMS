import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query partners {
  partners {
    state
    nodeId
    name
    isPublic
    id
    createdAt
    country
    city
    businessType
    address
  }
}`
    }
  }
}