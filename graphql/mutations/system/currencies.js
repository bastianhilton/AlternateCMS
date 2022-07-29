import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query agreements($id: Int) {
  currencies (where: {id: {_eq: $id}}) {
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
