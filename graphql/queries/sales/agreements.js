import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query agreements {
  agreements {
    id
    name
    type
    updated
    image
    excerpt
    created
    content
  }
}`
    }
  }
}