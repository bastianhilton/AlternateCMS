import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query segments {
  segments {
    applyTo
    createdAt
    customers
    description
    id
    name
    nodeId
    status
    website
  }
}`
    }
  }
}