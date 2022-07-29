import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  product_types (where: {id: {_eq: $id}}){
    filter_options
    id
    isShippable
    meta_description
    meta_url
    prod_id
    product_type
    taxes
    type_name
  }
}`
    }
  }
}
