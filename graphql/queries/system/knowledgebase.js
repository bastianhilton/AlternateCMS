import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query knowledgebases {
  knowledgebases {
    approver
    author
    content
    createdAt
    dateModified
    id
    name
    nodeId
    resolution
    revision
    status
  }
}`
    }
  }
}