import "dotenv/config";
import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs } from "./schema";
import { breedResolvers } from "./resolvers/breed.resolver";
import { studentResolvers } from "./resolvers/student.resolver";
import { CatApi } from "./datasources/catapi";

async function start() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const server = new ApolloServer({
    typeDefs,
    resolvers: [breedResolvers, studentResolvers] as any
  });
  await server.start();

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async () => ({
        catapi: new CatApi()
      })
    })
  );

  const port = Number(process.env.PORT || 4000);
  app.listen(port, () => {
    console.log(`🚀 GraphQL ready at http://localhost:${port}/graphql`);
  });
}

start().catch((e) => {
  console.error(e);
  process.exit(1);
});
