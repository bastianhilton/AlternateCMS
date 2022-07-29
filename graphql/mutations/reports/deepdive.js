import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int!) {
  deepdive(where: {id: {_eq: $id}}) {
    id
    end_date
    content
    created_at
    attendees
    login
    start_date
    whid
  }
}`
    }
  }
}
