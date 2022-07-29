import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query generalSettings {
  generalSettings {
    accessRestrictions
    createdAt
    customerSupport
    email
    httpResponse
    id
    landingPage
    restrictionMode
    nodeId
    startupPage
    storeContact
    storeContactTwo
    storeEmail
    tagline
    title
    url
  }
}`
    }
  }
}