import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query providers {
  providers {
    active
    clientId
    clientSecret
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