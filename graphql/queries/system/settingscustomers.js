import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query settingscustomers {
  settingscustomers {
    created_at
    customer_data_lifetime
    email_after_registration
    id
    login_as_customer
    online_minutes_interval
    share_customer_accounts
  }
}`
    }
  }
}
