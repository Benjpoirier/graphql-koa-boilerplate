
import { userResolver } from "./resolvers/user";
import { usersResolver } from "./resolvers/users";

import { createUserMutation } from "./mutations/createUser";
import { updateUserMutation } from "./mutations/updateUser";

export const resolvers = {
    Query: {
        ...userResolver,
        ...usersResolver,
    },

    Mutation: {
        ...createUserMutation,
        ...updateUserMutation,
    },
};
