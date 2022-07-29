import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  tags (where: {id: {_eq: $id}}){
    id
    name
    excerpt
    categories
    articles
    customers
    products
    users
  }
}`
    }
  }
}
