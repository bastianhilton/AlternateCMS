import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query targets {
  targets {
    accountName
    address
    altAddress
    altCity
    altCountry
    altPostalcode
    altState
    city
    country
    createdAt
    customerName
    department
    description
    donotcall
    email
    emailOptOut
    fax
    firstName
    id
    jobTitle
    lastName
    mobile
    nodeId
    officePhone
    postalcode
    prefix
    state
    website
  }
}`
    }
  }
}