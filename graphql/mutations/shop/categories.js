import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  categories (where: {id: {_eq: $id}}){
    id
    name
    content
    image
    meta_description
    meta_keywords
    meta_url
    meta_title
  }
}`
    }
  }
}
