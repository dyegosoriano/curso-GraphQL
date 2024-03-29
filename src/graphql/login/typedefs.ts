import { gql } from 'apollo-server-core'

export const loginTypeDefs = gql`
  extend type Mutation {
    login(data: LoginInput!): Login!
  }

  input LoginInput {
    userName: String!
    password: String!
  }

  type Login {
    userId: String!
    token: String!
  }
`
