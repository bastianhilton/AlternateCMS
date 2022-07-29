import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  leads (where: {id: {_eq: $id}}){
    Prefix
    account_name
    address
    alt_address
    alt_city
    alt_country
    alt_postalcode
    alt_state
    campaign
    city
    country
    created_at
    customer_name
    department
    description
    email
    fax
    first_name
    id
    job_title
    last_name
    lead_source
    lead_source_description
    mobile
    office_phone
    opportunity_amount
    postalcode
    referred_by
    state
    status
    status_description
    website
  }
}`
    }
  }
}
