import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  pages (where: {id: {_eq: $id}}){
    id
    title
    enable_page
    content_title
    content
    meta_description
    meta_keywords
    meta_title
    url_key
  }
}`
    }
  }
}
