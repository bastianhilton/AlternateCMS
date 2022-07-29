import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query agreements($id: Int) {
  agreements(where: {id: {_eq: $id}}) {
    id
    image
    name
    reference_id
    type
    updated
    excerpt
    created
    content
    user_id
  }
}`
    }
  }
}


  