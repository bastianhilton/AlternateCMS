import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  payments (where: {id: {_eq: $id}}){
    id
    icon
    name
    host_uri
    created_at
    country
    client_secret
    client_id
    active
    redirect_url
    redirect_url_app
  }
}`
    }
  }
}
