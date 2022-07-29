import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  websites (where: {id: {_eq: $id}}){
    id
    name
    shop
    store
    url
    created_at
  }
}`
    }
  }
}
