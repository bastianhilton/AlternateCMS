import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query glossaries {
  glossaries {
    id
    name
    image
    content
    published
  }
}`
    }
  }
}
