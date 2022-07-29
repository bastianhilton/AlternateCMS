import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query collections {
  collections {
    createdAt
    description
    id
    image
    metaDescription
    metaKeywords
    metaTitle
    name
    nodeId
    product
  }
}`
    }
  }
}