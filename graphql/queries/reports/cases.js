import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query cases {
  cases {
    accountName
    assignedTo
    caseNumber
    createdAt
    dateModified
    description
    id
    nodeId
    priority
    resolution
    state
    status
    subject
    type
  }
}`
    }
  }
}