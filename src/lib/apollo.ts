import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q8q9sb3ea201z4ey4982e7/master',
  cache: new InMemoryCache()
});
