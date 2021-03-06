import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query quotes {
  quotes {
    account
    approvalIssues
    approvalStatus
    assignedTo
    billingCity
    billingCountry
    billingPostal
    billingState
    billingStreet
    categories
    contact
    createdAt
    currency
    custId
    customers
    discount
    grandTotal
    id
    invoiceStatus
    lineItemDiscount
    lineItemGroupTotal
    lineItemName
    lineItemSubtotal
    lineItemTax
    lineItemTotal
    name
    nodeId
    orderId
    paymentTerms
    prodId
    quoteStage
    shipping
    shippingCity
    shippingCountry
    shippingPostal
    shippingState
    shippingStreet
    shippingTax
    subtotal
    tax
    total
    validUntil
  }
}`
    }
  }
}