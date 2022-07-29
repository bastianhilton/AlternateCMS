import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query articles ($id: Int){
  articles (where: {id: {_eq: $id}}) {
    categories
    content
    cust_id
    customers
    excerpt
    id
    image
    isPublic
    meta_description
    meta_name
    meta_url
    name
    published
    tags
    users
  }
}`
    }
  }
}