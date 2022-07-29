import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query visits {
  visits {
    content
    createdAt
    emergency
    endDate
    id
    location
    meeting
    nodeId
    reason
    startDate
    task
    username
  }
}`
    }
  }
}