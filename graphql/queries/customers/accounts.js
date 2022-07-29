import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query accounts {
  accounts {
    address
    altAddress
    altCity
    altCountry
    altPostalcode
    altState
    annualRevenue
    assignedTo
    campaign
    city
    country
    createdAt
    email
    employees
    fax
    id
    industry
    memberOf
    name
    nodeId
    officePhone
    postalcode
    state
    type
    website
  }
}`
    }
  }
}