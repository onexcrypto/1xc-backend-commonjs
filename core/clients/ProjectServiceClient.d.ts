import { Project } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";
export declare class ProjectServiceClient extends JsonServiceClient<Project> {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor();
    readOneProject(id: string): Promise<Project | undefined>;
}
export default ProjectServiceClient;
