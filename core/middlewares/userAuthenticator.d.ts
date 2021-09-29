import { Logger } from "../Logger";
import { ServiceMetadata } from "../peers";
export declare function userMiddlewareAuthenticator(logger: Logger, apiUrl: string, metadata: ServiceMetadata): (req: any, res: any, next: any) => Promise<any>;
