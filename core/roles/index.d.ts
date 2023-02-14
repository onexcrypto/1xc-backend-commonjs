type UserProfileScope = "user:profile:read" | "user:profile:create" | "user:profile:activate" | "user:profile:block" | "user:profile:update" | "user:profile:.*" | "user:rules:assign" | "user:subaccounts:create";
type UserBusinessScope = "user:business:read" | "user:business:allow" | "user:business:block" | "user:business:delete" | "user:business:.*";
type ProjectScope = "user:project:read" | "user:project:delete" | "user:project:.*";
type TicketScope = "ticket:details:read" | "ticket:status:approve" | "ticket:status:abort" | "ticket:transaction:read" | "ticket:status:.*" | "ticket:transaction:.*" | "ticket:.*:.*";
type WalletScope = "wallet:details:read" | "wallet:balance:credit" | "wallet:balance:debit" | "wallet:transfer:read" | "wallet:history:read" | "wallet:balance:.*" | "wallet:.*:.*";
type InvestmentNetworkScope = "investment:network:read" | "investment:network:.*";
type SystemMethodScope = "system:method:read" | "system:method:create" | "system:method:update" | "system:method:delete" | "system:method:.*";
type SystemMethodAccountScope = "system:methodaccount:read" | "system:methodaccount:create" | "system:methodaccount:update" | "system:methodaccount:delete" | "system:methodaccount:.*";
type SystemPropertyScope = "system:property:read" | "system:property:update" | "system:property:.*";
type SystemAdminScope = "system:admin:read" | "system:admin:create" | "system:admin:disable" | "system:admin:enable" | "system:admin:.*";
type AdminRoleScope = "admin:role:read" | "admin:role:update" | "admin:role:.*";
type SystemEventScope = "system:event:read";
type SystemLogScope = "system:log:read";
export type UserScope = UserProfileScope | UserBusinessScope | "user:.*:.*";
export type SystemScope = SystemMethodScope | SystemMethodAccountScope | SystemAdminScope | SystemPropertyScope | SystemEventScope | SystemLogScope | "system:.*:.*";
export type ScopedRole = UserScope | ProjectScope | TicketScope | WalletScope | InvestmentNetworkScope | AdminRoleScope | SystemScope | ".*:.*:.*";
export interface UserRole {
    id: string;
    roles: ScopedRole[];
}
export declare const ScopedRoleList: ScopedRole[];
export declare function userHasRole(needle: ScopedRole, haystack: ScopedRole[]): boolean;
export declare function userHasMultiRoles(needles: ScopedRole[], haystack: ScopedRole[]): boolean;
export {};
