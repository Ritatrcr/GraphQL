import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const uri = 'https://graphql-1-1vgu.onrender.com/graphql'

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache(),
})
