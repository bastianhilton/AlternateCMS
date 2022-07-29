import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  cities (where: {id: {_eq: $id}}){
    id
    name
    state
    description
    country
    postalCode
    image
  }
}`
    }
  }
}