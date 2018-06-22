// tslint:disable:object-literal-sort-keys
import { makeExecutableSchema } from "graphql-tools";

import { resolvers } from "./resolvers";
import { types } from "./types";
import { Mutation } from "./types/mutation";
import { Query } from "./types/query";

const schemaDefinition = `
    schema {
        query    : Query
        mutation : Mutation
    }
`;

const typeDefs = [
    schemaDefinition,
    Query,
    Mutation,
    ...types,
];

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
