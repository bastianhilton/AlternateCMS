import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query permissions {
  permissions {
    content
    create
    createdAt
    delete
    id
    name
    nodeId
    read
    role
    update
    users
  }
}`
    }
  }
}