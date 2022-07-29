import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  opportunites (where: {id: {_eq: $id}}){
    id
    name
    lead_source
    expected_close_date
    description
    currency
    created_at
    campaign
    assigned_to
    amount
    account_name
    next_step
    probability
    sales_stage
    type
  }
}`
    }
  }
}
