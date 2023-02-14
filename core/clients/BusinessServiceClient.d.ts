import { BusinessProfile } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";
export declare class BusinessServiceClient extends JsonServiceClient<BusinessProfile> {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor(url?: string | undefined, meta?: ServiceMetadata | undefined);
}
export default BusinessServiceClient;
