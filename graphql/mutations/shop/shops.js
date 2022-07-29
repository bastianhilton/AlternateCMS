import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  shops (where: {id: {_eq: $id}}){
    id
    name
    invoices
    image
    gift_certificates
    description
    customers
    coupons
    comments
    categories
    articles
    polls
    products
    quotes
    rating
    reports
    reviews
    reward_points
    special_discounts
    statistics
    stocks
    tags
    users
    website
    country
    physical_store
    type
  }
}`
    }
  }
}
