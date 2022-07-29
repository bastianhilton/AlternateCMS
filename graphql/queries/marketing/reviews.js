import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query reviews {
  reviews {
    id
    firstName
    createdAt
    content
    commentId
    lastName
    nodeId
    shopId
    websites
  }
}`
    }
  }
}