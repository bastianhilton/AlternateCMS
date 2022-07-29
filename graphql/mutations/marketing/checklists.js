import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  checklist (where: {id: {_eq: $id}}){
    country
    created_at
    description
    id
    location
    manager
    media
    prod_id
    project
    region
    regional_manager
    ticket
    username
  }
}`
    }
  }
}
