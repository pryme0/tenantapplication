import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graph",
  });
  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
  const   authorization  = process.env.authorization
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${authorization}`,
      }
    }
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;