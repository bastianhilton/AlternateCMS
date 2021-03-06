import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  orders (where: {id: {_eq: $id}}){
    id
    grand_total_purchased
    grand_total_base
    braintree_transaction_source
    bill_to_name
    allocated_sources
    action
    purchase_date
    purchase_point
    ship_to_name
    status
  }
}`
    }
  }
}
