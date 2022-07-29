import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query customersLimit {
  customers(first: 5) {
    address
    addressTwo
    confirmedEmail
    country
    customerGroup
    customerSince
    dateOfBirth
    description
    email
    firstName
    gender
    id
    lastName
    image
    middleName
    namePrefix
    nameSuffix
    nodeId
    product
    phone
    paymentType
    password
    shortDescription
    state
    taxVatNumber
    thumbnail
    username
    websites
    zipcode
  }
}`
    }
  }
}