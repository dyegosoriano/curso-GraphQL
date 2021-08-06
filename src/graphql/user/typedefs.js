import { gql } from 'apollo-server-core'

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): UserResult!
    users(input: ApiFiltersInput): [User!]!
  }

  union UserResult = User | UserNotFoundError

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    createdAt: String!
  }

  type UserNotFoundError {
    statusCode: Int!
    message: String!
  }
`
