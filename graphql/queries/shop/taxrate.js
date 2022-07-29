import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query taxRates {
  taxRates {
    country
    defaultStoreView
    nodeId
    id
    postcode
    prodId
    ratePercent
    state
    taxIdentifier
    zipPostIsRange
  }
}`
    }
  }
}