import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  warehouse (where: {id: {_eq: $id}}){
    id
    description
    created_at
    country
    city
    category
    image
    name
    postal
    products
    isPublic
    state
    status
  }
}`
    }
  }
}
