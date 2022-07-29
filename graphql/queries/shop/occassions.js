import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query occassions {
  occassions {
    id
    description
    name
    products
    tags
    wishlists
    category
    code
    created_at
    product {
      name
      price
      id
    }
    wishlist {
      id
      name
      products
    }
  }
}`
    }
  }
}
