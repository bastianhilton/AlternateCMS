import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query wishlists {
  wishlists {
    createdAt
    customers
    id
    name
    nodeId
    visibility
    quantity
    products
  }
}`
    }
  }
}