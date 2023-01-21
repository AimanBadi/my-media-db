import { gql } from "graphql-tag";

export const typeDefs = gql`
  scalar Date

  type Query {
    "Query to get all notes left on a specific piece of media"
    notesOnMedia(id: ID!): [Note]
    "Test Query"
    hello: String!
  }

  type Mutation {
    createNote(
      userId: ID!
      mediaId: String!
      content: String!
    ): CreateNoteResponse!
  }

  type CreateNoteResponse {
    code: Int!
    success: Boolean!
    message: String!
    note: Note
  }

  type Note {
    id: ID!
    user: User!
    media: Media!
    content: String!
    createAt: Date!
    updatedAt: Date!
  }

  type Media {
    id: ID!
    title: String!
    poster: String!
    overview: String!
    releaseDate: Date!
    rating: Float!
  }

  type User {
    id: ID!
    name: String
    email: String
  }
`;
