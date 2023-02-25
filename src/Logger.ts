import { RedisClientType } from "redis";

type LogLevel = "alert" | "critical" | "debug" | "emergency" | "error" | "info" | "notice" | "warn";

interface Log{
    service: string;
    logLevel: LogLevel;
    timestamp: number;
    message: string;
}

export class Logger{
    public client: RedisClientType;
    public channel: string;
    public service: string;

    constructor(client: RedisClientType, channel: string, service: string){
        this.client = client;
        this.channel = channel;
        this.service = service;
    }

    alert(message: string){
        this.publish("alert", message);
    }
    critical(message: string){
        this.publish("critical", message);
    }

    debug(message: string){
        this.publish("debug", message);
    }

    emergency(message: string){
        this.publish("emergency", message);
    }

    error(message: string){
        this.publish("error", message);
    }

    info(message: string){
        this.publish("info", message);
    }

    notice(message: string){
        this.publish("notice", message);
    }

    warn(message: string){
        this.publish("warn", message);
    }

    private publish(level: LogLevel, message: string){
        let log: Log = {
            service: this.service,
            timestamp: Date.now(),
            logLevel: level,
            message: message
        }
        this.client.publish(this.channel, JSON.stringify(log));
    }
}