import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query creditMemos {
  creditMemos {
    action
    billToName
    created
    creditMemo
    custId
    id
    nodeId
    orderNumber
    prodId
    refunded
    status
    customerByCustId {
      id
      firstName
      lastName
    }
    productByProdId {
      id
      name
      price
    }
  }
}`
    }
  }
}