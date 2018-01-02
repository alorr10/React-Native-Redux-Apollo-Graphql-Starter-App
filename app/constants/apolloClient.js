import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'

const graphcoolEndpoint = 'YOUR ENDPOINT HERE'
const httpLink = new HttpLink({ uri: graphcoolEndpoint })
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client



// import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
// import { WebSocketLink } from 'apollo-link-ws';
// import { split } from 'apollo-link';
// import { getMainDefinition } from 'apollo-utilities';

// const graphcoolEndpoint = 'https://api.graph.cool/simple/v1/cjab9uyc90ygx0152knu3ae4u'
// const graphcoolSubscriptionEndpoint = 'wss://subscriptions.graph.cool/v1/cjab9uyc90ygx0152knu3ae4u'

// const httpLink = new HttpLink({ uri: graphcoolEndpoint })
// // const wsLink = new WebSocketLink({
// //   uri: graphcoolSubscriptionEndpoint,
// //   options: {
// //     reconnect: true
// //   }
// // });

// // // using the ability to split links, you can send data to each link
// // // depending on what kind of operation is being sent
// // const link = split(
// //   // split based on operation type
// //   ({ query }) => {
// //     const { kind, operation } = getMainDefinition(query);
// //     return kind === 'OperationDefinition' && operation === 'subscription';
// //   },
// //   wsLink,
// //   httpLink,
// // );

// const client = new ApolloClient({
//   httpLink,
//   cache: new InMemoryCache()
// })

// export default client