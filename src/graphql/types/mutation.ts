export const Mutation = `
    type Mutation {
        createUser (
            user: NewUserPatch!
        ): User

        updateUser (
            id: String!
            patch: UserPatch!
        ): User
    }
`;
