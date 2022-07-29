import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  apitoken (where: {id: {_eq: $id}}){
    name
    id
    description
    created_at
    token
    token_type
  }
}`
    }
  }
}
