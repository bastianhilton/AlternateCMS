import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  accounts (where: {id: {_eq: $id}}){
    address
    alt_address
    alt_city
    alt_country
    alt_postalcode
    alt_state
    annual_revenue
    assigned_to
    campaign
    city
    id
    fax
    employees
    email
    created_at
    country
    member_of
    industry
    name
    office_phone
    postalcode
    state
    type
    website
  }
}`
    }
  }
}
