import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query channels {
  channels {
    id
    default_zone
    default_shipping
    default_lang
    currency
    created_at
    code
    client_secret
    client_id
    include_tax
    name
  }
}`
    }
  }
}
