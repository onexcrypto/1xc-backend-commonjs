import { Method } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";
export declare class MethodServiceClient extends JsonServiceClient<Method> {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor(url?: string | undefined, meta?: ServiceMetadata | undefined);
}
export default MethodServiceClient;
