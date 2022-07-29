import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  product_attribute (where: {id: {_eq: $id}}){
    allow_html_tags_storefront
    attribute_class
    attribute_code
    attribute_value
    column_options
    faceted_navigation
    filter_options
    id
    isPublic
    layered_navigation
    meta_description
    meta_name
    meta_url
    position
    prod_id
    default_label
  }
}`
    }
  }
}
