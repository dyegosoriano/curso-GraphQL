import 'dotenv/config'

import { ApolloServer } from 'apollo-server'

import { resolvers, typeDefs } from './graphql/schema'
import { context } from './graphql/context'

import { LoginApi } from './graphql/login/datasources'
import { PostsApi } from './graphql/post/datasources'
import { UsersApi } from './graphql/user/datasources'

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context,

  dataSources: () => {
    return {
      loginApi: new LoginApi(),
      postApi: new PostsApi(),
      userApi: new UsersApi(),
    }
  },
})

server.listen(4000).then(({ url }) => console.log(`🚀 Server ready at ${url}`))
