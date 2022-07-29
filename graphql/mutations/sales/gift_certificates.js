import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  gift_certificates (where: {id: {_eq: $id}}){
    id
    image
    name
    products
    published
    rewards
    special_offers
    expiration
    excerpt
    discount
    customers
    coupons
    categories
    articles
    users
    type
  }
}`
    }
  }
}
