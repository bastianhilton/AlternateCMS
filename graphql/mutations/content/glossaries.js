import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  glossaries (where: {id: {_eq: $id}}){
    id
    name
    image
    content
    published
  }
}`
    }
  }
}
