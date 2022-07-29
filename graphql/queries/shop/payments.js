import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query payments {
  payments {
    active
    clientId
    clientSecret
    country
    createdAt
    hostUri
    icon
    id
    name
    nodeId
    redirectUrl
    redirectUrlApp
  }
}`
    }
  }
}