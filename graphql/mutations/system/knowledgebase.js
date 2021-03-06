import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query agreements($id: Int) {
  knowledgebase(where: {id: {_eq: $id}}) {
    id
    date_modified
    created_at
    content
    author
    approver
    name
    resolution
    revision
    status
  }
}`
    }
  }
}
