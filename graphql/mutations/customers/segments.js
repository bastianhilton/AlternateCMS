import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  segments (where: {id: {_eq: $id}}){
    id
    name
    status
    website
    customers
    description
    created_at
    apply_to
  }
}`
    }
  }
}
