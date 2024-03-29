"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodServiceClient = void 0;
const JsonServiceClient_1 = require("./JsonServiceClient");
class MethodServiceClient extends JsonServiceClient_1.JsonServiceClient {
    static clientMetadata;
    static url;
    constructor(url = undefined, meta = undefined) {
        super(url || MethodServiceClient.url, meta || MethodServiceClient.clientMetadata);
    }
}
exports.MethodServiceClient = MethodServiceClient;
exports.default = MethodServiceClient;
