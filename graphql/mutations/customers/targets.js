import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  targets (where: {id: {_eq: $id}}){
    id
    first_name
    fax
    email_opt_out
    email
    donotcall
    description
    department
    customer_name
    created_at
    country
    city
    alt_state
    alt_postalcode
    alt_country
    alt_city
    alt_address
    address
    account_name
    Prefix
    job_title
    last_name
    mobile
    office_phone
    postalcode
    state
    website
  }
}`
    }
  }
}
