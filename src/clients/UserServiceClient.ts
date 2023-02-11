import { Customer, AccessToken } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";
import Axios from "axios";

export class UserServiceClient extends JsonServiceClient<Customer>{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(url: string | undefined = undefined, meta: ServiceMetadata| undefined = undefined){
        super(url || UserServiceClient.url, meta || UserServiceClient.clientMetadata);
    }

    async getTokenData(token: string): Promise<{token: AccessToken, userId: string, firstName: string, lastName: string}>{
        return Axios.get(
            `${this.url}/uat/${token}`,
            {
                withCredentials: true,
                headers: this.defaultHeaders
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data.data;
            }
        })
    }
}

export default UserServiceClient;