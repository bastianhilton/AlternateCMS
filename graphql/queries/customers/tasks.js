import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query tasks {
  tasks {
    assignedTo
    contact
    createdAt
    dateModified
    description
    dueDate
    id
    nodeId
    priority
    relatedTo
    startDate
    status
    subject
  }
}`
    }
  }
}