import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query roles {
  roles {
    content
    createdAt
    id
    nodeId
    roleName
  }
}`
    }
  }
}