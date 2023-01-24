import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  scalar Date

  type Query {
    "Query to get all notes left on a specific piece of media"
    notesOnMedia(id: ID!): [Note]
    "Query to get popular movies from tmdb api"
    getPopularMovies: [Media]
    "Query to get popular TV shows from tmdb api"
    getPopularTV: [Media]
    hello: String
    "Get details about specific movie"
    getMovie(id: ID!): Media
    "Get details about specific TV show"
    getTV(id: ID!): Media
  }

  type Mutation {
    createNote(mediaId: String!, content: String!): CreateNoteResponse!
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
