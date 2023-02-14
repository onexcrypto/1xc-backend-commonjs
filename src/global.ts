import {
    AdminServiceClient,
    AssetServiceClient,
    BusinessServiceClient,
    ConversionServiceClient,
    IssuerClient,
    MethodAccountServiceClient,
    MethodServiceClient,
    ProjectServiceClient,
    PropertyServiceClient,
    UserServiceClient,
    WalletServiceClient
} from "./clients";

interface ApiClients {
    admins: AdminServiceClient,
    assets: AssetServiceClient,
    businesses: BusinessServiceClient,
    conversions: ConversionServiceClient,
    issuer: IssuerClient,
    projects: ProjectServiceClient,
    methods: MethodServiceClient,
    methodAccounts: MethodAccountServiceClient,
    users: UserServiceClient,
    wallets: WalletServiceClient,
    properties: PropertyServiceClient
}

declare global {
    var Api: ApiClients;
}