import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query projects {
  projects {
    id
    name
    nodeId
    priority
    projectManager
    projectTemplate
    resource
    sectionRule
    staffId
    startDate
    status
    ticketId
    taskId
    goalUpdatemethod
    goalTimeperiod
    goalProgressSource
    goalPrivacy
    goalName
    goalMeasurement
    goalCollaborators
    endDate
    done
    doing
    custId
    createdAt
    considerworkingdays
    assignee
  }
}`
    }
  }
}