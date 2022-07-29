import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query apitokens {
  apitokens {
    createdAt
    description
    id
    name
    nodeId
    token
    tokenType
  }
}`
    }
  }
}