import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  wishlists (where: {id: {_eq: $id}}){
    created_at
    customers
    id
    name
    products
    quantity
    visibility
  }
}`
    }
  }
}
