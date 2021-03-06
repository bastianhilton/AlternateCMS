import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query giftCertificates {
  giftCertificates {
    articles
    categories
    customers
    coupons
    discount
    excerpt
    expiration
    id
    image
    name
    nodeId
    products
    published
    rewards
    specialOffers
    type
    users
  }
}`
    }
  }
}