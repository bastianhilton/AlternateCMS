import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  states (where: {id: {_eq: $id}}){
    id
    name
    description
    image
    country
  }
}`
    }
  }
}
