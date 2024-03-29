import Axios from "axios";
import { Admin, AdminWithRoles } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";

export class AdminServiceClient extends JsonServiceClient<Admin>{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(url: string | undefined = undefined, meta: ServiceMetadata| undefined = undefined){
        super(url || AdminServiceClient.url, meta || AdminServiceClient.clientMetadata);
    }

    async readWithRole(id: string):Promise<AdminWithRoles>{
        return Axios.get(
            `${this.url}/${id}/with-roles`,
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

export default AdminServiceClient;