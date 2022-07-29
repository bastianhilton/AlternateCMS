import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query productAttributes {
  productAttributes {
    allowHtmlTagsStorefront
    attributeClass
    attributeCode
    attributeValue
    columnOptions
    defaultLabel
    facetedNavigation
    filterOptions
    id
    isPublic
    layeredNavigation
    metaDescription
    metaName
    metaUrl
    nodeId
    position
    prodId
    promoRuleConditions
    searchResultsLayeredNavigation
    useSearch
    usedProducting
    usedSortingProducting
    visibleCatalogPagesStorefront
  }
}`
    }
  }
}