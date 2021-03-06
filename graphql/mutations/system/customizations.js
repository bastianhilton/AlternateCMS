import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query customizations ($id: Int) {
  customizations (where: {id: {_eq: $id}}) {
    id
    footer_link
    email
    created_at
    banner
    announcement
    allow_signup
    nav_link
    notification
    site_name
    site_url
  }
}`
    }
  }
}
