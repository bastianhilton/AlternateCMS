import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query settingsmarketing {
  settingsmarketing {
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
