import { gql } from 'apollo-server-core'

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): Post!
    posts(input: ApiFiltersInput): [Post!]!
  }

  extend type Mutation {
    createPost(data: CreatePostInput!): Post!
    updatePost(postId: ID!, data: UpdatePostInput!): Post!
  }

  type Post {
    id: ID!
    createdAt: String!
    indexRef: Int!
    title: String!
    body: String!

    user: User!
  }

  input CreatePostInput {
    userId: String!
    title: String!
    body: String!
  }

  input UpdatePostInput {
    userId: String
    title: String
    body: String
  }
`
