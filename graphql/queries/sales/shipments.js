import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query shipments {
  shipments {
    carrierName
    clientId
    clientSecret
    country
    id
    image
    nodeId
    product
    shipDate
    speedGrade
    trackingUrl
    transitTime
    website
  }
}`
    }
  }
}