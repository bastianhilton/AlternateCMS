import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query importm($id: Int) {
  importm(where: {id: {_eq: $id}}) {
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
