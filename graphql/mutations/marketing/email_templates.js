import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  email_templates (where: {id: {_eq: $id}}){
    id
    height
    header
    footer
    created_at
    content
    assigned_to
    active
    insert_variable
    media
    name
    subject
    type
    width
  }
}`
    }
  }
}
