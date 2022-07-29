import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  events (where: {id: {_eq: $id}}){
    id
    image
    name
    postalcode
    start
    state
    tickets
    end
    created_at
    country
    content
    city
    category
  }
}`
    }
  }
}
