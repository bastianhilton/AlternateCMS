import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query newsletterSubscribers {
  newsletterSubscribers {
    createdAt
    custId
    customerFirstName
    customerLastName
    email
    id
    nodeId
    status
    store
    websites
    customerByCustId {
      confirmedEmail
      country
      email
      id
    }
  }
}`
    }
  }
}