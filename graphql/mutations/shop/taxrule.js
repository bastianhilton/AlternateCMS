import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  tax_rule (where: {id: {_eq: $id}}){
    id
    name
    tax_rate
  }
}`
    }
  }
}
