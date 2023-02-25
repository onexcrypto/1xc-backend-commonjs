import { RedisClientType } from "redis";
export declare class Logger {
    client: RedisClientType;
    channel: string;
    service: string;
    constructor(client: RedisClientType, channel: string, service: string);
    alert(message: string): void;
    critical(message: string): void;
    debug(message: string): void;
    emergency(message: string): void;
    error(message: string): void;
    info(message: string): void;
    notice(message: string): void;
    warn(message: string): void;
    private publish;
}
