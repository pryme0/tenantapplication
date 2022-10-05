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
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmNhYmNmMDc1MGM0MDA2MWUxYzgzNSIsImZpcnN0bmFtZSI6IktlbiIsImxhc3RuYW1lIjoiTWNHcmVnb3IgIiwiY3JlYXRlZEF0IjoiV2VkIEF1ZyAxNyAyMDIyIDA4OjUwOjIzIEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSkiLCJ1cGRhdGVkQXQiOiJXZWQgQXVnIDE3IDIwMjIgMDg6NTA6MjMgR01UKzAwMDAgKENvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lKSIsImVtYWlscyI6W3siYWRkcmVzcyI6ImNvZGVzdGFja2VyOUBnbWFpbC5jb20iLCJ2ZXJpZmllZCI6ZmFsc2UsInByaW1hcnkiOnRydWUsInZlcmlmaWNhdGlvbkNvZGUiOiIzNTI4NDQifV0sInNlcnZpY2VzIjp7InBhc3N3b3JkIjp7Imhhc2hlZCI6IiQyYSQwOCRURW9CaU5PWTVyay5mdXRpV2d1b1guaHdEeUhVS25ZWUFLZWxpUlBZTUdCTi9hMTYxUER5LiJ9fSwicGhvbmUiOiIoMjM0KSA3MDMzLTMzMzMiLCJkYXRlT2ZCaXJ0aCI6LTEyMDExNTQ2ODgsIndob0ltSSI6eyJpcCI6ImZyZWUiLCJ1c2VyQWdlbnQiOiJmcmVlIn0sImlhdCI6MTY2MDczNzc4MywiZXhwIjoxNjkyMjczNzgzfQ.LWBeXsuANH4G-3jTBB4EchDXI_yheAnZXv8c4SiE0As"
      }
    }
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;