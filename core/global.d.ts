import { AdminServiceClient, AssetServiceClient, BusinessServiceClient, ConversionServiceClient, IssuerClient, MethodAccountServiceClient, MethodServiceClient, ProjectServiceClient, UserServiceClient, WalletServiceClient } from "./clients";
interface ApiClients {
    admins: AdminServiceClient;
    assets: AssetServiceClient;
    businesses: BusinessServiceClient;
    conversions: ConversionServiceClient;
    issuer: IssuerClient;
    projects: ProjectServiceClient;
    methods: MethodServiceClient;
    methodAccounts: MethodAccountServiceClient;
    users: UserServiceClient;
    wallets: WalletServiceClient;
}
declare global {
    var Api: ApiClients;
}
export {};
