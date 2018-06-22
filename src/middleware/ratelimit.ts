import * as Redis from "ioredis";
import * as koaRatelimit from "koa-ratelimit";

export default () => {
    if (process.env.NODE_ENV !== "test") {

        return new koaRatelimit({
            db: new Redis(Number(process.env.REDIS_PORT), process.env.REDIS_HOST, null),
            duration: process.env.RATELIMIT_DURATION,
            max: process.env.RATELIMIT_MAX,
        });
    } else {
        return async (ctx, next) => next();
    }
};
