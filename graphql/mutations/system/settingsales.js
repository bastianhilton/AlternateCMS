import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query settingsales ($id: Int) {
  settingsales (where: {id: {_eq: $id}}) {
    adwords_conversioncolor
    adwords_conversionformat
    adwords_conversionid
    adwords_conversionlabel
    adwords_conversionlanguage
    adwords_conversionvalue_type
    adwords_sendorder
    analytics_account_number
    analytics_account_type
    analytics_anonymizeip
    analytics_content_experiments
    created_at
    id
    tag_manager_contentexperiments
    tag_manager_containerid
    tag_manager_anonymizeip
  }
}`
    }
  }
}
