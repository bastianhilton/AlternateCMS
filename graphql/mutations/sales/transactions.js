import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  transactions (where: {id: {_eq: $id}}){
    id
    order_id
    parent_transaction_id
    payment_method
    transaction_id
    created
    closed
  }
}`
    }
  }
}
