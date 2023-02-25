import { PoolConnection } from "mysql";
import { RedisClientType } from "redis";
import { Peer } from "../peers";
import { serviceMiddlewareAuthenticator } from "./serviceAuthenticator";
import { userMiddlewareAuthenticator } from "./userAuthenticator";

declare module "express-serve-static-core" {
    export interface Request{
        mysql: PoolConnection;
        redis: RedisClientType;
        peer: Peer;
    }
}

export const Authenticators = {
    service: serviceMiddlewareAuthenticator,
    user: userMiddlewareAuthenticator
}