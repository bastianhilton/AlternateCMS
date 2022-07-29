import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query {
  allreviews(limit: 5) {
    id
    first_name
    last_name
    content
    websites
    created_at
  }
}`
    }
  }
}
