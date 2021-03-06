import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query emails {
  emails {
    id
    cust_id
    created_at
    content
    subject
    customer {
      id
      first_name
      last_name
      email
    }
    bcc
    cc
    from
    media
    staff_id
    user {
      email
      id
      last_name
      username
      first_name
    }
  }
}`
    }
  }
}
