"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const schema_1 = require("./schema");
const breed_resolver_1 = require("./resolvers/breed.resolver");
const student_resolver_1 = require("./resolvers/student.resolver");
const catapi_1 = require("./datasources/catapi");
async function start() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    const server = new server_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: [breed_resolver_1.breedResolvers, student_resolver_1.studentResolvers]
    });
    await server.start();
    app.use("/graphql", (0, express4_1.expressMiddleware)(server, {
        context: async () => ({
            catapi: new catapi_1.CatApi()
        })
    }));
    const port = Number(process.env.PORT || 4000);
    app.listen(port, () => {
        console.log(`🚀 GraphQL ready at http://localhost:${port}/graphql`);
    });
}
start().catch((e) => {
    console.error(e);
    process.exit(1);
});
