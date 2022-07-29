import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query leads {
  leads {
    accountName
    address
    altAddress
    altCountry
    altCity
    altPostalcode
    altState
    campaign
    city
    country
    createdAt
    customerName
    department
    description
    email
    fax
    firstName
    id
    jobTitle
    lastName
    leadSource
    leadSourceDescription
    mobile
    nodeId
    officePhone
    opportunityAmount
    postalcode
    prefix
    referredBy
    state
    status
    statusDescription
    website
  }
}`
    }
  }
}