import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  permissions (where: {id: {_eq: $id}}){
    id
    created_at
    content
    name
    create
    delete
    read
    role
    update
    users
  }
}`
    }
  }
}
