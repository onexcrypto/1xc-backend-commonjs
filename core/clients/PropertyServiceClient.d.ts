import { SystemProperties } from "..";
import { ServiceMetadata } from "../peers";
import { ServiceClient } from "./ServiceClient";
export declare class PropertyServiceClient extends ServiceClient {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor(url?: string | undefined, meta?: ServiceMetadata | undefined);
    read(): Promise<SystemProperties | undefined>;
}
export default PropertyServiceClient;
