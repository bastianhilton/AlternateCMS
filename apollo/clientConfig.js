import { InMemoryCache } from "apollo-cache-inmemory";
export default function(context){
  return {
  		httpLinkOptions: {
    		uri: 'http://localhost:4000',
    		credentials: 'same-origin'
  		},
  		cache: new InMemoryCache(),
	    wsEndpoint: 'ws://localhost:4000',
  	}
}