// 5 types => int, float, string, boolean, ID

export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    paltform: [String!]!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }
  type Query {
    reviews: [Review]
    games: [Game]
    authors: [Author]
  }
`