import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  rewards (where: {id: {_eq: $id}}){
    id
    expiration
    customers
    created_at
    coupons
    categories
    articles
    level
    name
    slug
    products
    users
  }
}`
    }
  }
}
