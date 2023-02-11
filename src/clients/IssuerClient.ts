import { ServiceClient } from "./ServiceClient";
import Axios from "axios";
import { ServiceMetadata } from "../peers";
import { KeyValue } from "..";

export class IssuerClient extends ServiceClient{
    static clientMetadata: ServiceMetadata;
    static url:string;

    constructor(url: string | undefined = undefined, meta: ServiceMetadata| undefined = undefined){
        super(url || IssuerClient.url, meta || IssuerClient.clientMetadata);
    }

    async sign(data: KeyValue): Promise<string>{
        return Axios.post(
            `${this.url}/issue`,
            data,
            {
                headers:{
                    'Service-Name': this.access.name,
                    'Service-Signature': this.access.signature
                }
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data.data;
            }
            return "";
        })
    }

    async verify(token: string, format: "bearer"|"uat" = "bearer"): Promise<KeyValue>{
        return Axios.post(
            `${this.url}/decode?format=${format}`,
            {token: token},
            {
                headers:{
                    'Service-Name': this.access.name,
                    'Service-Signature': this.access.signature
                }
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data.data;
            }
            return {};
        })
    }
}

export default IssuerClient;