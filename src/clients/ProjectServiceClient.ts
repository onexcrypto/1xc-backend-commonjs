import axios from "axios";
import { Project } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";

export class ProjectServiceClient extends JsonServiceClient<Project>{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(url: string | undefined = undefined, meta: ServiceMetadata| undefined = undefined){
        super(url || ProjectServiceClient.url, meta || ProjectServiceClient.clientMetadata);
    }

    async readOneProject(id: string): Promise<Project|undefined>{
        return axios.get(
            `${this.url}/?id=${id}`,
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

export default ProjectServiceClient;