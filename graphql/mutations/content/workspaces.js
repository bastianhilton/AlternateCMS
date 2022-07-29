import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  workspaces (where: {id: {_eq: $id}}){
    author
    brand {
      id
      name
      media
      isPublic
      description
      created_at
      country
      code
      city
      product
      state
    }
    category
    code
    created_at
    brands
    customers
    description
    id
    isPublic
    media
    name
    users
    tasks
    shops
    projects
    products
    product {
      id
      name
      price
    }
    project {
      id
      name
      assignee
    }
    shop {
      id
      name
      products
    }
    task {
      id
      subject
    }
    user {
      id
      username
    }
    customer {
      id
      first_name
      last_name
      email
    }
    categoryByCategory {
      id
      name
    }
  }
}`
    }
  }
}
