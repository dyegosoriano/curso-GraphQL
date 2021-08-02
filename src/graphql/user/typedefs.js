import { gql } from 'apollo-server-core'

export const userTypeDefs = gql`
  extend type Query {
    user: User!
    users: [User!]!
  }

  type User {
    id: ID!
    name: String!
  }
`
