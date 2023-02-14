import { PriceStep } from "../pricing";
export type UserRuleStatus = "allow" | "disallow";
interface IAbstractRule {
    id?: string;
    name: string;
    status: UserRuleStatus;
    metadata: any;
}
export interface IRuleCardScan extends IAbstractRule {
    name: "card.scan";
    metadata: {
        owners: string[];
        wallets: string[];
        cards: string[];
    };
}
export interface IRuleCardEmit extends IAbstractRule {
    name: "card.emit";
    metadata: {
        card: {
            serial: string;
        };
        transfer: {
            receptionWallet: string;
            pricing: PriceStep[];
        };
        wallet: {
            type: "anonymous";
        };
    };
}
export interface IRuleExchange extends IAbstractRule {
    name: "exchanges";
}
export interface IRuleTransfer extends IAbstractRule {
    name: "wallet.transfer";
}
export interface IRuleUser extends IAbstractRule {
    name: "subaccounts";
}
export type UserRule = IRuleUser | IRuleCardScan | IRuleCardEmit | IRuleExchange | IRuleTransfer;
export {};
