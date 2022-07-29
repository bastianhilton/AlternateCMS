import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int!) {
  reports(where: {id: {_eq: $id}}) {
    id
    ip_address
    products
    quantity
    subtotal
    updated
    email
    customer
    created
    applied_coupon
  }
}`
    }
  }
}
