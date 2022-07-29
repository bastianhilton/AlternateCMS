import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query coupons {
  coupons {
    articles
    categories
    customers
    discount
    excerpt
    expiration
    image
    id
    prodId
    name
    nodeId
    products
    published
    users
  }
}`
    }
  }
}