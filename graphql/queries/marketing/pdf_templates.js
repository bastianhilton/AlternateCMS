import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query pdf_templates {
  pdf_templates {
    id
    header
    footer
    created_at
    content
    assigned_to
    active
    margin_bottom
    margin_footer
    margin_header
    margin_left
    margin_right
    margin_top
    name
    orientation
    page_size
    type
  }
}`
    }
  }
}
