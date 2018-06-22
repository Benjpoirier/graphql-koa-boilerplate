import { getRepository } from "typeorm";
import { User } from "../../model/user";

export const updateUserMutation = {
    async updateUser(_, { id, patch }) {
        const repository = getRepository(User);
        const user = await repository.findOne({ id });
        const result = await repository.update(id, patch);
        return {
            ...user,
            ...patch,
        };
    },
};
