import { getRepository } from "typeorm";
import { User } from "../../model/user";

export const createUserMutation = {
    async createUser(_, { user: attrs }) {
        const repository = getRepository(User);
        const user = {
            ...attrs,
        };

        await repository.save(user);
        return user;
    },
};
