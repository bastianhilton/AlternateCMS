import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query plugins {
  plugins {
    id
    name
    logo
    lastUpdated
    githubLink
    description
    createdAt
    agreeTerms
    nodeId
    publisherEmail
    publisherName
    screenshots
    url
  }
}`
    }
  }
}