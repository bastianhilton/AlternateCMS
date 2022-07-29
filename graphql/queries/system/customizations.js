import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query customizations {
  customizations {
    siteUrl
    siteName
    notification
    nodeId
    navLink
    id
    footerLink
    email
    createdAt
    banner
    announcement
    allowSignup
  }
}`
    }
  }
}