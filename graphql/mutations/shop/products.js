import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  products (where: {id: {_eq: $id}}){
    attributes
    categories
    content
    country
    file
    format
    height
    id
    image
    manufacture
    meta_description
    meta_keywords
    meta_title
    meta_url
    name
    price
    visibility
    types
    thumbnail
    tax_class
    stock_status
    status
    size
    sku
    short_description
    salable_quantity
    quantity_per_source
    product
    websites
    weight
  }
}`
    }
  }
}
