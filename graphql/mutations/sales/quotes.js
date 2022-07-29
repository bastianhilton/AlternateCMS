import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  quotes (where: {id: {_eq: $id}}) {
    account
    approval_issues
    approval_status
    assigned_to
    billing_city
    billing_country
    billing_postal
    billing_state
    billing_street
    categories
    contact
    created_at
    currency
    cust_id
    customers
    discount
    grand_total
    id
    invoice_status
    line_item_discount
    line_item_group_total
    line_item_name
    name
    line_item_total
    line_item_tax
    line_item_subtotal
    prod_id
    payment_terms
    order_id
    tax
    subtotal
    shipping_tax
    shipping_street
    shipping_state
    shipping_postal
    shipping_country
    shipping_city
    shipping
    quote_stage
    total
    valid_until
    product {
      id
      name
      price
    }
    order {
      id
      bill_to_name
    }
    customer {
      id
      first_name
      last_name
    }
  }
}`
    }
  }
}
