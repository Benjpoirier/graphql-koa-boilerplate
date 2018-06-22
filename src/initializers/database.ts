// tslint:disable:no-debugger
// tslint:disable:no-console
import { createConnection, getConnectionOptions} from "typeorm";

export default async () => {
    const options = await getConnectionOptions();

    return await createConnection(options).then((connection) => {
        debugger;
        console.log("Database connection established");
    });
};
