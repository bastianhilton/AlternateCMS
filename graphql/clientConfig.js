import { InMemoryCache } from "apollo-cache-inmemory";
export default function(context){
  return {
  		httpLinkOptions: {
    		uri: 'http://127.0.0.1:4000/graphql',
    		credentials: 'same-origin',
			headers: {}
  		},
  		cache: new InMemoryCache(),
	    wsEndpoint: 'ws://127.0.0.1:4000/graphql',
  	}
}