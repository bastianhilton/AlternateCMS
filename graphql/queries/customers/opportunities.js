import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query opportunities {
  opportunities {
    accountName
    amount
    assignedTo
    campaign
    createdAt
    currency
    description
    expectedCloseDate
    id
    leadSource
    name
    nextStep
    nodeId
    probability
    salesStage
    type
  }
}`
    }
  }
}