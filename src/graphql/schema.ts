import { gql } from 'apollo-server-core'

import { apiFilterResolvers } from './api-filters/resolvers'
import { apiFiltersTypeDefs } from './api-filters/typedefs'

import { postResolvers } from './post/resolvers'
import { postTypeDefs } from './post/typedefs'

import { userResolvers } from './user/resolvers'
import { userTypeDefs } from './user/typedefs'

import { loginResolvers } from './login/resolvers'
import { loginTypeDefs } from './login/typedefs'

const rootTypeDefs = gql`
  type Mutation {
    _empty: Boolean
  }

  type Query {
    _empty: Boolean
  }
`

const rootResolvers = {
  Mutation: { _empty: () => true },
  Query: { _empty: () => true },
}

export const resolvers = [rootResolvers, userResolvers, postResolvers, apiFilterResolvers, loginResolvers]
export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs, apiFiltersTypeDefs, loginTypeDefs]
