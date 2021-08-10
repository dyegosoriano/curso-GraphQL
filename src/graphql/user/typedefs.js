import { gql } from 'apollo-server-core'

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): User!
    users(input: ApiFiltersInput): [User!]!
  }

  type User {
    id: ID!
    firstName: String!
    createdAt: String!
    lastName: String!
    userName: String!

    posts: [Post!]!
  }
`
