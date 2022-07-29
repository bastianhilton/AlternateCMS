import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query orders {
  orders {
    action
    allocatedSources
    billToName
    braintreeTransactionSource
    custId
    grandTotalBase
    grandTotalPurchased
    id
    nodeId
    prodId
    purchaseDate
    purchasePoint
    status
    shipToName
  }
}`
    }
  }
}