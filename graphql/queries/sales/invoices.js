import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query invoices {
  invoices {
    billToName
    billingAddress
    customerGroup
    customerName
    email
    grandTotalBase
    grandTotalPurchased
    id
    invoice
    invoiceDate
    nodeId
    orderNumber
    paymentMethod
    shippingAddress
    shippingAndHandling
    shippingInformation
    status
    subtotal
  }
}`
    }
  }
}