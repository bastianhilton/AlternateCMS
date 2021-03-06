import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query settingsgeneral ($id: Int) {
  settingsgeneral (where: {id: {_eq: $id}}) {
    id
    http_response
    email
    customer_support
    created_at
    access_restrictions
    landing_page
    restriction_mode
    startup_page
    store_contact
    store_contact_two
    store_email
    tagline
    title
    url
  }
}`
    }
  }
}
