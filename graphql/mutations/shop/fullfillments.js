import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  fullfillments (where: {id: {_eq: $id}}){
    id
    name
    phone
    pickup
    shipping_zones
    state
    stock
    zipcode
    created_at
    country_area
    country
    company
    city
    address_two
    address
  }
}`
    }
  }
}
