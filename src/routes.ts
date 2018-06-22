
import * as koaBody from "koa-bodyparser";
import * as Router from "koa-router";

import {
    graphiqlKoa,
    graphqlKoa,
} from "apollo-server-koa";
import { schema } from "./graphql/schema";

export const routes = new Router();

const apiEntrypointPath = "/graphql";
const graphQlOpts = graphqlKoa({
    schema,
});

routes.get(apiEntrypointPath, graphQlOpts);
routes.post(apiEntrypointPath, koaBody(), graphQlOpts);

routes.get("/graphiql", graphiqlKoa({ endpointURL: apiEntrypointPath }));
