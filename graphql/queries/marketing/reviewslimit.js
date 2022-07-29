import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query reviewsLimit {
  reviews(first: 5) {
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