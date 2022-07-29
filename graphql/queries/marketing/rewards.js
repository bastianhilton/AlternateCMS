import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query rewards {
  rewards {
    users
    slug
    products
    nodeId
    name
    level
    id
    expiration
    customers
    createdAt
    coupons
    categories
    articles
  }
}`
    }
  }
}