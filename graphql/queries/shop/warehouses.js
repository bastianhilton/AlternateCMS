import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query warehouses {
  warehouses {
    status
    state
    products
    postal
    nodeId
    name
    isPublic
    image
    id
    description
    createdAt
    country
    city
    category
  }
}`
    }
  }
}