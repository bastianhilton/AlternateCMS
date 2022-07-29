import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query agreements($id: Int) {
  ooto(where: {id: {_eq: $id}}) {
    id
    end_date
    note
    created_at
    login
    start_date
    location
  }
}`
    }
  }
}
