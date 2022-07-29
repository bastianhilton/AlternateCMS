import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query workspaces {
  workspaces {
    author
    brands
    category
    code
    createdAt
    customers
    description
    id
    isPublic
    media
    name
    nodeId
    products
    projects
    shops
    tasks
    users
    brandByBrands {
      id
      name
    }
    categoryByCategory {
      id
      name
    }
    customerByCustomers {
      id
      firstName
      lastName
    }
    productByProducts {
      id
      name
    }
    projectByProjects {
      id
      name
    }
    shopByShops {
      id
      name
    }
    taskByTasks {
      id
      subject
    }
    userByUsers {
      id
      username
    }
  }
}`
    }
  }
}