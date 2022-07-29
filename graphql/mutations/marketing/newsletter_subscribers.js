import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  newsletter_subscribers (where: {id: {_eq: $id}}){
    id
    email
    customer_last_name
    customer_first_name
    status
    store
    websites
    created_at
  }
}`
    }
  }
}
