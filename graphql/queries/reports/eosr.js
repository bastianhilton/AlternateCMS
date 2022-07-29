import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query endofshifts {
  endofshifts {
    content
    createdAt
    id
    login
    mcms
    nextShift
    nodeId
    projects
    tickets
    whid
  }
}`
    }
  }
}