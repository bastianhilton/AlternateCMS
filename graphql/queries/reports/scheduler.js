import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query schedulers {
  schedulers {
    createdAt
    endDate
    id
    level
    login
    nodeId
    notes
    startDate
    whid
  }
}`
    }
  }
}