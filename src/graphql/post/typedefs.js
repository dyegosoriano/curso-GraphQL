import { gql } from 'apollo-server-core'

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): PostResult!
    posts(input: ApiFiltersInput): [Post!]!
  }

  union PostResult = Post | PostNotFoundError

  type Post {
    id: ID!
    title: String!
    body: String!
    indexRef: Int!
    createdAt: String!
  }

  type PostNotFoundError {
    statusCode: Int!
    message: String!
  }
`
