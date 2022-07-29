import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query countries {
  countries {
    description
    id
    image
    name
    nodeId
    region
  }
}`
    }
  }
}