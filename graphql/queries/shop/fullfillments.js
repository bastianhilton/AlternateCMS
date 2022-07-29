import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query fullfillments {
  fullfillments {
    address
    addressTwo
    city
    company
    country
    countryArea
    createdAt
    id
    name
    nodeId
    phone
    pickup
    shippingZones
    state
    stock
    zipcode
  }
}`
    }
  }
}