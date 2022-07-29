import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  customer_group (where: {id: {_eq: $id}}){
    id
    name
    tax_class
    created_at
  }
}`
    }
  }
}
