import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query categories {
  categories {
    content
    country
    description
    id
    image
    metaDescription
    metaKeywords
    metaTitle
    metaUrl
    name
    nodeId
    product
    websites
    visibility
    thumbnail
    status
  }
}`
    }
  }
}