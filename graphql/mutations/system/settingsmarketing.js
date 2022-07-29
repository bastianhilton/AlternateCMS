import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query settingsmarketing ($id: Int) {
  settingsmarketing (where: {id: {_eq: $id}}) {
    adsense_api
    customer_data_lifetime
    id
    mail_port
    mail_server
    recaptcha_api
    sitemap_url
  }
}`
    }
  }
}
