import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query webhooks {
  webhooks {
    create
    createdAt
    delete
    headers
    id
    name
    nodeId
    publish
    retrieve
    unpublish
    update
    url
  }
}`
    }
  }
}