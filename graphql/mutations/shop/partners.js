import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  partners (where: {id: {_eq: $id}}){
    id
    created_at
    country
    city
    business_type
    address
    isPublic
    name
    state
  }
}`
    }
  }
}
