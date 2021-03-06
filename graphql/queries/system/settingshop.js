import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query settingshop {
  settingshop {
    vendor_transaction_id
    seller_payouts
    product_videos
    id
    multishipping
    enable_review_system
    enable_vendor_product_attribute
    enable_product_assignment
    customer_rate_vendor
    admin_approval
  }
}`
    }
  }
}
