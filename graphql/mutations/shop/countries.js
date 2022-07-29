import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  countries (where: {id: {_eq: $id}}){
    id
    name
    description
    image
    region
  }
}`
    }
  }
}