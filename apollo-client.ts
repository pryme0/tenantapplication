import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graph",
  });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
          "Authorization": `Bearer ${process.env.authorization}`
      }
    }
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;