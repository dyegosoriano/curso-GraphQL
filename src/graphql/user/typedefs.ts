import { gql } from 'apollo-server-core'

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): User!
    users(input: ApiFiltersInput): [User!]!
  }

  extend type Mutation {
    createUser(data: CreateUserInput!): User!
    updateUser(userId: ID!, data: UpdateUserInput!): User!
    deleteUser(userId: ID!): Boolean!
  }

  type User {
    id: ID!
    firstName: String!
    createdAt: String!
    lastName: String!
    userName: String!

    posts: [Post!]!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    userName: String!
    password: String!
  }

  input UpdateUserInput {
    newPassword: String
    firstName: String
    lastName: String
    userName: String
    password: String
  }
`
