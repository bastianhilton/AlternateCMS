import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query deepdives {
  deepdives {
    attendees
    content
    createdAt
    endDate
    id
    login
    nodeId
    startDate
    whid
  }
}`
    }
  }
}