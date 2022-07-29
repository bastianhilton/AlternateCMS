import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  returns (where: {id: {_eq: $id}}){
    id
    name
    return_prefix
    validity
    created_at
  }
}`
    }
  }
}
