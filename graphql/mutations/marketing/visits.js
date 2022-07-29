import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  visits (where: {id: {_eq: $id}}){
    content
    created_at
    emergency
    end_date
    id
    location
    meeting
    reason
    start_date
    task
    username
  }
}`
    }
  }
}
