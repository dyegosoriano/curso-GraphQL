import 'dotenv/config'

import { ApolloServer } from 'apollo-server'

import { resolvers, typeDefs } from './graphql/schema'

import { PostsApi } from './graphql/post/datasources'
import { UsersApi } from './graphql/user/datasources'

import { context } from './graphql/context'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postApi: new PostsApi(),
      userApi: new UsersApi()
    }
  }
})

server.listen(4000).then(({ url }) => console.log(`Server listening on url ${url}`))
