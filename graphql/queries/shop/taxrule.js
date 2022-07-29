import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query taxRules {
  taxRules {
    id
    name
    nodeId
    prodId
    taxRate
  }
}`
    }
  }
}