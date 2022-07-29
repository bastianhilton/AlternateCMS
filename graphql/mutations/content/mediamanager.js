import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  mediamanager (where: {id: {_eq: $id}}){
    agreements
    albums
    author
    brands
    comment
    content_type
    copyright
    created_at
    description
    dimensions
    expiration_date
    id
    keywords
    media
    members
    name
    status
    products
    tags
    task_description
    task_name
    task_type
    versions
    watermark_description
    watermark_media
    watermark_name
    workspace
  }
}`
    }
  }
}
