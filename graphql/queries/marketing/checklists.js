import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query checklists {
  checklists {
    country
    createdAt
    description
    id
    location
    manager
    media
    nodeId
    prodId
    project
    region
    regionalManager
    ticket
    username
    trainingsByChecklists {
      id
      assignments
    }
    statesByTrainingChecklistsAndState {
      id
      name
    }
    productsByTrainingChecklistsAndProducts {
      id
      name
    }
  }
}`
    }
  }
}