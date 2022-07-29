import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query transactions {
  transactions {
    closed
    created
    id
    nodeId
    orderId
    parentTransactionId
    paymentMethod
    transactionId
    orderByOrderId {
      id
      billToName
    }
    customerPaymentByPaymentMethod {
      id
      provider
    }
  }
}`
    }
  }
}