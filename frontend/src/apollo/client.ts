import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const uri = '/graphql'

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache(),
})
