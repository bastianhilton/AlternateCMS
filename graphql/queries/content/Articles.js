import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query articles {
  articles {
    id
    excerpt
    customers
    custId
    content
    categories
    image
    isPublic
    metaDescription
    metaName
    metaUrl
    name
    nodeId
    published
    tags
    users
  }
}`
    }
  }
}
