import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query importms {
  importms(order_by: {name: asc}) {
    id
    file
    description
    created_at
    image
    name
    url
  }
}`
    }
  }
}
