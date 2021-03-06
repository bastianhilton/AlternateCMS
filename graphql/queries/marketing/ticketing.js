import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ticketings {
  ticketings {
    accountName
    assignedTo
    comment
    content
    createdAt
    date
    dateModified
    department
    id
    level
    location
    media
    name
    nodeId
    priority
    products
    projects
    requester
    requesterEmail
    resolution
    severity
    status
    team
    ticketType
    projectsByTicketId {
      id
      name
    }
    tasksByProjectTicketIdAndTaskId {
      id
      subject
    }
  }
}`
    }
  }
}