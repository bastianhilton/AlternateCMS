import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query events {
  events {
    tickets
    state
    postalcode
    nodeId
    name
    image
    id
    end
    createdAt
    country
    content
    start
    city
    category
  }
}`
    }
  }
}