import { Method } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";

export class MethodServiceClient extends JsonServiceClient<Method>{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(url: string | undefined = undefined, meta: ServiceMetadata| undefined = undefined){
        super(url || MethodServiceClient.url, meta || MethodServiceClient.clientMetadata);
    }
}

export default MethodServiceClient;