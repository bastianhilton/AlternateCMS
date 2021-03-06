import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  tax_rate (where: {id: {_eq: $id}}){
    id
    country
    default_store_view
    postcode
    rate_percent
    state
    tax_identifier
    zip_post_is_range
  }
}`
    }
  }
}
