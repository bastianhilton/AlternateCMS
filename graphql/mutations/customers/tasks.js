import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  tasks (where: {id: {_eq: $id}}){
    id
    due_date
    description
    date_modified
    created_at
    contact
    assigned_to
    priority
    related_to
    start_date
    status
    subject
  }
}`
    }
  }
}
