import React from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'

import store from './app/store'
import RootNavigator from './app/navigation/RootNavigator.js'

import client from './app/constants/apolloClient'

export default class extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <ApolloProvider client={client}>
          <RootNavigator />
        </ApolloProvider>
      </Provider>
    )
  }
}