// tslint:disable:no-console
import * as cluster from "cluster";
import * as os from "os";
import app from "./app";

const main = async () => {
    if (cluster.isMaster && process.env.NODE_ENV === "production") {
        os.cpus().forEach(() => cluster.fork());

        cluster.on("online", (worker) => console.log(`Worker ${worker.process.pid} online.`));
        cluster.on("message", (message) => console.log(message));
        cluster.on("exit", (worker, signal) => {
            console.log(`Worker ${worker.process.pid} died (signal: ${signal}). Restarting...`);
            cluster.fork();
        });
    } else {
        await app();
    }
};

main().catch((error) => console.error(error));
