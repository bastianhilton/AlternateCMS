import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query reports {
  reports {
    appliedCoupon
    created
    customer
    email
    id
    ipAddress
    nodeId
    products
    quantity
    subtotal
    updated
  }
}`
    }
  }
}