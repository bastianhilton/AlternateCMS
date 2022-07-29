import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  coupons (where: {id: {_eq: $id}}){
    id
    image
    name
    products
    published
    users
    expiration
    excerpt
    discount
    customers
    categories
    articles
  }
}`
    }
  }
}
