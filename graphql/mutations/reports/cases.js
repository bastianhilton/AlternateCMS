import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int!) {
  cases(where: {id: {_eq: $id}}) {
    id
    priority
    resolution
    state
    status
    subject
    description
    created_at
    date_modified
    case_number
    assigned_to
    account_name
    type
  }
}`
    }
  }
}
