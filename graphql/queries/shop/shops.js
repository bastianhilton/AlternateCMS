import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query shops {
  shops {
    articles
    categories
    comments
    country
    coupons
    customers
    description
    giftCertificates
    id
    image
    invoices
    name
    nodeId
    physicalStore
    polls
    products
    quotes
    rating
    reports
    reviews
    rewardPoints
    specialDiscounts
    statistics
    stocks
    tags
    website
    type
    users
  }
}`
    }
  }
}