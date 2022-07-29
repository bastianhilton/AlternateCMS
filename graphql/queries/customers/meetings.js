import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query meetings {
  meetings {
    assignedTo
    content
    createdAt
    duration
    endDate
    id
    invitees
    nodeId
    relatedTo
    reminders
    scheduling
    startDate
    status
    subject
  }
}`
    }
  }
}