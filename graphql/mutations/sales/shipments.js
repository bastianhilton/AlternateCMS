import gql from 'graphql-tag';

export default {
  methods: {
    async fetchSomething() {
      const query = gql `
query ($id: Int){
  shipments (where: {id: {_eq: $id}}){
    id
    carrier_name
    image
    product
    ship_date
    speed_grade
    tracking_url
    transit_time
  }
}`
    }
  }
}
