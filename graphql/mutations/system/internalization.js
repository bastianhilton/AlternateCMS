import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query internalization ($id: Int) {
  internalization (where: {id: {_eq: $id}}) {
    id
    name
    region
    website
    description
    default
    created_at
  }
}`
    }
  }
}
