import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  invoices (where: {id: {_eq: $id}}){
    subtotal
    status
    shipping_information
    shipping_and_handling
    shipping_address
    payment_method
    order_number
    invoice_date
    invoice
    grand_total_purchased
    grand_total_base
    email
    customer_name
    customer_group
    billing_address
    bill_to_name
  }
}`
    }
  }
}
