import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query returns {
  returns {
    createdAt
    custId
    id
    name
    nodeId
    prodId
    returnPrefix
    validity
  }
}`
    }
  }
}