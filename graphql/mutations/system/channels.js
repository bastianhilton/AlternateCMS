import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query channels ($id: Int) {
  channels (where: {id: {_eq: $id}}) {
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
