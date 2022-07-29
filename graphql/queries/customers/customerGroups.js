import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query customerGroups {
  customerGroups {
    id
    name
    nodeId
    taxClass
    createdAt
    custId
  }
}`
    }
  }
}