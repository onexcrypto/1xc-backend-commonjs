import { Money, Wallet, WalletHistoryType } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";
interface CreditOrDebitResult {
    data: string;
}
export declare class WalletServiceClient extends JsonServiceClient<Wallet> {
    static clientMetadata: ServiceMetadata;
    static url: string;
    constructor();
    readWallet(walletId: string): Promise<Wallet | undefined>;
    transfer(walletId: string, data: any): Promise<{
        statusCode: number;
        data: {
            success: boolean;
            data?: any;
            errors?: any;
        };
    }>;
    readMainWallet(userId: string): Promise<Wallet | undefined>;
    readBusinessWallet(userId: string): Promise<Wallet | undefined>;
    debit(wallet: string, money: Money, memo: string, type?: WalletHistoryType): Promise<CreditOrDebitResult | undefined>;
    credit(wallet: string, money: Money, memo: string, type?: WalletHistoryType): Promise<CreditOrDebitResult | undefined>;
    verifyPIN(data: {
        walletId: string;
        pin: string;
    }): Promise<boolean>;
}
export default WalletServiceClient;
