import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query {
  allcustomers(limit: 5) {
    Address
    address_two
    confirmed_email
    country
    customer_group
    customer_since
    date_of_birth
    description
    email
    first_name
    gender
    id
    image
    middle_name
    name_prefix
    last_name
    name_suffix
    phone
    product
    short_description
    state
    tax_vat_number
    thumbnail
    websites
    zipcode
  }
}`
    }
  }
}
