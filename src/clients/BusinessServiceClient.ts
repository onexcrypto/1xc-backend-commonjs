import axios from "axios";
import { BusinessProfile, Project } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";

export class BusinessServiceClient extends JsonServiceClient<BusinessProfile>{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(){
        super(BusinessServiceClient.url, BusinessServiceClient.clientMetadata);
    }

    async findOneProject(id: string): Promise<Project|undefined>{
        return axios.get(
            `${this.url}/projects?id=${id}`,
            {
                withCredentials: true,
                headers: this.defaultHeaders
            }
        )
        .then((res) => {
            if(res.data.success){
                return res.data.data[0]||undefined;
            }
            return undefined;
        })
    }
}

export default BusinessServiceClient;