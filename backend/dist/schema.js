"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.typeDefs = (0, graphql_tag_1.gql /* GraphQL */) `
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
    program: String
  }

  type Query {
    breed(id: ID!): Breed
    students: [Student!]!
  }
`;
