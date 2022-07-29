import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  roles (where: {id: {_eq: $id}}){
    id
    created_at
    content
    role_name
  }
}`
    }
  }
}
