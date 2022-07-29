import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query mediamanagers {
  mediamanagers {
    agreements
    albums
    author
    brands
    comment
    contentType
    copyright
    createdAt
    description
    dimensions
    expirationDate
    id
    keywords
    media
    members
    name
    nodeId
    products
    status
    tags
    taskDescription
    taskName
    taskType
    versions
    watermarkDescription
    watermarkMedia
    watermarkName
    workspace
  }
}`
    }
  }
}