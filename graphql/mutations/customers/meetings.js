import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  meeting (where: {id: {_eq: $id}}){
    id
    assigned_to
    content
    created_at
    duration
    end_date
    invitees
    related_to
    reminders
    scheduling
    start_date
    status
    subject
  }
}`
    }
  }
}