import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  ticketing (where: {id: {_eq: $id}}){
    id
    department
    date_modified
    date
    created_at
    content
    comment
    assigned_to
    account_name
    level
    location
    media
    name
    priority
    products
    projects
    requester
    requester_email
    resolution
    ticket_type
    team
    status
    severity
  }
}`
    }
  }
}
