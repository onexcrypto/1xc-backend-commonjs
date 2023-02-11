import { Customer, AccessToken } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";
export declare class UserServiceClient extends JsonServiceClient<Customer> {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor(url?: string | undefined, meta?: ServiceMetadata | undefined);
    getTokenData(token: string): Promise<{
        token: AccessToken;
        userId: string;
        firstName: string;
        lastName: string;
    }>;
}
export default UserServiceClient;
