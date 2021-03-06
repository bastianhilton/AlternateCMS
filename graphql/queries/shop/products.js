import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query products {
  products {
    attributes
    brand
    categories
    content
    contract
    costString
    country
    createdAt
    customerType
    family
    file
    format
    height
    id
    image
    manufacture
    manufacturerPartNumber
    metaDescription
    metaKeywords
    metaTitle
    metaUrl
    name
    nodeId
    occassions
    partNumber
    price
    product
    quantityPerSource
    relatedProduct
    salableQuantity
    shortDescription
    size
    sku
    status
    stockStatus
    tags
    taxClass
    thumbnail
    types
    variants
    visibility
    websites
    weight
    zone
  }
}`
    }
  }
}