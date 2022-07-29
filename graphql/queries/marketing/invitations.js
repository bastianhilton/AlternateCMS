import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query invitations {
  invitations {
    id
    grandTotalPurchased
    email
    createdAt
    content
    billingAddress
    invoiceDate
    media
    nodeId
    orderNumber
    paymentMethod
    shippingAddress
    status
  }
}`
    }
  }
}