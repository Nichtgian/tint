import "reflect-metadata";
import * as express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { createConnection, Connection } from "typeorm";
import { createExpressServer } from "routing-controllers";
import { buildSchema } from "type-graphql";

import { Injector } from "./helper/decorator/injection/injector";
import { GeneralHelper } from "./helper/general.helper";
import { ConsoleHelper } from "./helper/console/console.helper";
import { Test } from "./test/test";

import { MarkResolver } from "./api/resolver/mark.resolver";

createConnection().then(async (connection: Connection) => {
    const schema = await buildSchema({
        resolvers: [ MarkResolver ]
    });

    const app = createExpressServer({
        cors: false,
        classTransformer: true,
        routePrefix: "/api",
        controllers: [__dirname + "/api/controller/*.controller{.js,.ts}"]
    });
    app.use(express.static("../frontend"));

    const server = new ApolloServer({ schema });
    server.applyMiddleware({ app });

    app.listen({ port: GeneralHelper.port }, () => {
        ConsoleHelper.info(`Frontend: http://localhost:${GeneralHelper.port}`);
        ConsoleHelper.info(`Backend API: http://localhost:${GeneralHelper.port}/api`);
        ConsoleHelper.info(`Backend GraphQL API: http://localhost:${GeneralHelper.port}${server.graphqlPath}`);
    });
});

Injector.resolve<Test>(Test).runAllTests();
