import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  credit_memos (where: {id: {_eq: $id}}){
    bill_to_name
    created
    credit_memo
    order_number
    refunded
    status
  }
}`
    }
  }
}