"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectServiceClient = void 0;
const axios_1 = __importDefault(require("axios"));
const JsonServiceClient_1 = require("./JsonServiceClient");
class ProjectServiceClient extends JsonServiceClient_1.JsonServiceClient {
    constructor() {
        super(ProjectServiceClient.url, ProjectServiceClient.clientMetadata);
    }
    async readOneProject(id) {
        return axios_1.default.get(`${this.url}/?id=${id}`, {
            withCredentials: true,
            headers: this.defaultHeaders
        })
            .then((res) => {
            if (res.data.success) {
                return res.data.data[0] || undefined;
            }
            return undefined;
        });
    }
}
exports.ProjectServiceClient = ProjectServiceClient;
exports.default = ProjectServiceClient;
