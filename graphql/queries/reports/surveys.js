import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query surveys {
  surveys {
    answer
    assignedTo
    createdAt
    description
    dissatisfiedText
    id
    name
    neitherText
    nodeId
    question
    satisfiedText
    status
    submitText
  }
}`
    }
  }
}