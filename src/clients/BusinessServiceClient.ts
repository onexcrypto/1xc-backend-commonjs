import { BusinessProfile } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";

export class BusinessServiceClient extends JsonServiceClient<BusinessProfile>{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(url: string | undefined = undefined, meta: ServiceMetadata| undefined = undefined){
        super(url || BusinessServiceClient.url, meta || BusinessServiceClient.clientMetadata);
    }
}

export default BusinessServiceClient;