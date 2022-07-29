import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query websites {
  websites {
    url
    store
    shop
    name
    id
    createdAt
    nodeId
    image
    category
  }
}`
    }
  }
}