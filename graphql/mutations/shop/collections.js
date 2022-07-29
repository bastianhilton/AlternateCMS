import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  collections (where: {id: {_eq: $id}}){
    id
    image
    meta_description
    meta_keywords
    meta_title
    name
    product
    description
    created_at
  }
}`
    }
  }
}
