import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  reviews (where: {id: {_eq: $id}}){
    id
    first_name
    last_name
    content
    websites
    created_at
  }
}`
    }
  }
}
