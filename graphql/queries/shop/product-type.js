import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query productTypes {
  productTypes {
    filterOptions
    id
    isShippable
    metaDescription
    metaUrl
    nodeId
    prodId
    productType
    taxes
    typeName
  }
}`
    }
  }
}