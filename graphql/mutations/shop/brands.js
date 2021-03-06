import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  brands (where: {id: {_eq: $id}}){
    city
    code
    country
    created_at
    description
    id
    isPublic
    media
    name
    product
    state
    productByProduct {
      id
      name
    }
  }
}`
    }
  }
}
