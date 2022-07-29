import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query tags {
  tags {
    id
    name
    excerpt
    categories
    articles
    customers
    products
    users
  }
}`
    }
  }
}
