import * as cors from "kcors";
import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as compress from "koa-compress";
import etag = require("koa-etag");
import * as helmet from "koa-helmet";
import databaseInitializer from "./initializers/database";
import rateLimit from "./middleware/ratelimit";
import { routes } from "./routes";

export default async () => {
    await databaseInitializer();
    try {
        const app = new Koa()
            .use(cors({ exposeHeaders: ["Content-Disposition"] }))
            .use(compress())
            .use(etag())
            .use(helmet())
            .use(rateLimit())
            .use(bodyParser({ formLimit: process.env.RATELIMIT_SIZE }))
            .use(routes.routes())
            .use(routes.allowedMethods())
            .listen(3000, () => {
                    // tslint:disable-next-line:no-console
                console.log("server started");
            });

    } catch (error) {
        // tslint:disable-next-line:no-console
        console.error(error);
    }
};
