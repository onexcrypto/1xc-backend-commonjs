import { ServiceMetadata } from "../peers";
import { AdminServiceClient } from "./AdminServiceClient";
import { AssetServiceClient } from "./AssetServiceClient";
import { BusinessServiceClient } from "./BusinessServiceClient";
import { ConversionServiceClient } from "./ConversionServiceClient";
import { IssuerClient } from "./IssuerClient";
import { MethodAccountServiceClient } from "./MethodAccountServiceClient";
import MethodServiceClient from "./MethodServiceClient";
import ProjectServiceClient from "./ProjectServiceClient";
import { PropertyServiceClient } from "./PropertyServiceClient";
import { UserServiceClient } from "./UserServiceClient";
import { WalletServiceClient } from "./WalletServiceClient";

/**
 * Setup proxy url of every client available.
 * @param url - the base url of the proxy that interconnects queryable rest apis of services
 */

export function configureProxyEndpoint(url: string) {
    AdminServiceClient.url = url + "/admins";
    AssetServiceClient.url = url + "/assets";
    BusinessServiceClient.url = url + "/business";
    ConversionServiceClient.url = url + "/rates";
    IssuerClient.url = url + "/issuer";
    ProjectServiceClient.url = url + "/projects"
    PropertyServiceClient.url = url + '/system/properties';
    MethodServiceClient.url = url + '/system/methods';
    MethodAccountServiceClient.url = url + '/system/accounts';
    UserServiceClient.url = url + '/users';
    WalletServiceClient.url = url + '/wallets';
}

/**
 * Setup client metadata on every client code connection to any service
 * @param meta the metadatas of the connecting client
 */
export function configureClientMetadata(meta: ServiceMetadata) {
    AdminServiceClient.clientMetadata = meta;
    AssetServiceClient.clientMetadata = meta;
    BusinessServiceClient.clientMetadata = meta;
    ConversionServiceClient.clientMetadata = meta;
    IssuerClient.clientMetadata = meta;
    ProjectServiceClient.clientMetadata = meta;
    PropertyServiceClient.clientMetadata = meta;
    MethodServiceClient.clientMetadata = meta;
    MethodAccountServiceClient.clientMetadata = meta;
    UserServiceClient.clientMetadata = meta;
    WalletServiceClient.clientMetadata = meta;
    PropertyServiceClient.clientMetadata = meta;
}

export function configureProxyAccess(url: string, meta: ServiceMetadata) {
    configureProxyEndpoint(url);
    configureClientMetadata(meta);

    if (!global.Api) {
        global.Api = {
            admins: new AdminServiceClient(),
            assets: new AssetServiceClient(),
            businesses: new BusinessServiceClient(),
            conversions: new ConversionServiceClient(),
            issuer: new IssuerClient(),
            projects: new ProjectServiceClient(),
            methods: new MethodServiceClient(),
            methodAccounts: new MethodAccountServiceClient(),
            users: new UserServiceClient(),
            wallets: new WalletServiceClient(),
            properties: new PropertyServiceClient()
        }
    }
}

export * from "./AdminServiceClient";
export * from "./AssetServiceClient";
export * from "./BusinessServiceClient";
export * from "./ConversionServiceClient";
export * from "./IssuerClient";
export * from "./ProjectServiceClient";
export * from "./PropertyServiceClient";
export * from "./MethodServiceClient";
export * from "./MethodAccountServiceClient";
export * from "./UserServiceClient";
export * from "./WalletServiceClient";
export * from "./ServiceClient";
export * from "./JsonServiceClient";