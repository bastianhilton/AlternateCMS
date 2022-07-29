import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query statistics {
  statistics {
    articles
    categories
    coupons
    customers
    description
    excerpt
    expiration
    id
    image
    name
    nodeId
    products
    published
    reports
    rewards
    specialOffers
    users
  }
}`
    }
  }
}