import { gql } from 'apollo-server-core'

import { userResolvers } from './user/resolvers'
import { postResolvers } from './post/resolvers'

import { apiFiltersTypeDefs } from './api-filters/typedefs'
import { postTypeDefs } from './post/typedefs'
import { userTypeDefs } from './user/typedefs'

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`

const rootResolvers = {
  Query: {
    _empty: () => true
  }
}

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs, apiFiltersTypeDefs]
export const resolvers = [rootResolvers, userResolvers, postResolvers]
