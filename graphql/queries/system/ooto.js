import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ootos {
  ootos {
    createdAt
    endDate
    id
    location
    login
    nodeId
    note
    startDate
    usingTime
  }
}`
    }
  }
}