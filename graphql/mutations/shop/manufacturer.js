import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  manufacturer (where: {id: {_eq: $id}}){
    product
    name
    media
    isPublic
    id
    description
    created_at
    country
    code
    city
  }
}`
    }
  }
}
