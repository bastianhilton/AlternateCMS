/* eslint-disable no-new */
import { ApolloSandbox } from '@apollo/sandbox'

new ApolloSandbox({
  target: '#embedded-sandbox',
  initialEndpoint: 'http://localhost:8001/',
  includeCookies: true
})
