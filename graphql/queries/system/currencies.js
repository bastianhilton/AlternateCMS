import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query currencies {
  currencies {
    id
    name
    region
    created_at
    code
  }
}`
    }
  }
}
