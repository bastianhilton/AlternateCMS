import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query contracts {
  contracts {
    account
    companySignedDate
    contact
    contractManager
    contractTitle
    contractType
    contractValue
    createdAt
    currency
    customerSignedDate
    description
    discount
    endDate
    grandTotal
    id
    lineItems
    nodeId
    opportunity
    renewalReminder
    shipping
    shippingTax
    startDate
    status
    subtotal
    tax
    total
  }
}`
    }
  }
}