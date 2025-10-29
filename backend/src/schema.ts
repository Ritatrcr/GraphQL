import { gql } from "graphql-tag";

export const typeDefs = gql/* GraphQL */ `
  type Breed {
    id: ID!
    name: String!
    temperament: String
    origin: String
    description: String
    life_span: String
    wikipedia_url: String
    weight_imperial: String
    weight_metric: String
    image_url: String
  }

  type Student {
    id: ID!
    firstName: String!
    lastName: String!
    email: String
    age: Int
  }

  type Query {
    breed(id: ID!): Breed
    students: [Student!]!
  }
`;
