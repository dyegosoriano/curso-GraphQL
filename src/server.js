import 'dotenv/config'

import { ApolloServer } from 'apollo-server'

import { context } from './graphql/context'
import { PostsApi } from './graphql/post/datasources'
import { resolvers, typeDefs } from './graphql/schema'
import { UsersApi } from './graphql/user/datasources'

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context,

  dataSources: () => {
    return {
      postApi: new PostsApi(),
      userApi: new UsersApi()
    }
  }
})

server.listen(4000).then(({ url }) => console.log(`🚀 Server ready at ${url}`))
