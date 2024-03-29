import Axios from "axios";
import { Money, Wallet, WalletHistoryType } from "..";
import { ServiceMetadata } from "../peers";
import { JsonServiceClient } from "./JsonServiceClient";


interface CreditOrDebitResult {
    data: string; /// history Id;
}

export class WalletServiceClient extends JsonServiceClient<Wallet>{
    static clientMetadata: ServiceMetadata;
    static url: string;

    constructor(url: string | undefined = undefined, meta: ServiceMetadata| undefined = undefined){
        super(url || WalletServiceClient.url, meta || WalletServiceClient.clientMetadata);
    }

    async readWallet(walletId: string): Promise<Wallet | undefined> {
        return Axios.get(
            this.url + `/?wallet=${walletId}`,
            {
                headers: this.defaultHeaders
            }
        )
            .then((res) => {
                if (res.data.success) {
                    return res.data.data[0] || undefined;
                }
                return undefined;
            })
    }

    async transfer(walletId: string, data: any): Promise<{ statusCode: number; data: { success: boolean; data?: any; errors?: any } }> {
        return Axios.post(
            this.url + `/${walletId}/transfer`
            , data
            , {
                withCredentials: true,
                headers: {
                    ...this.defaultHeaders,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }
        ).then(res => {
            return {
                statusCode: res.status
                , data: res.data
            }
        }, err => {
            return {
                statusCode: err.response.status,
                data: err.response.data
            };
        })
    }

    async readMainWallet(userId: string): Promise<Wallet | undefined> {
        return Axios.get(
            this.url + `/?user=${userId}&principal=true`,
            {
                headers: this.defaultHeaders
            }
        )
            .then((res) => {
                if (res.data.success) {
                    return res.data.data[0] || undefined;
                }
                return undefined;
            })
    }

    async readBusinessWallet(userId: string): Promise<Wallet | undefined> {
        return Axios.get(
            this.url + `/?user=${userId}&business=true`,
            {
                headers: this.defaultHeaders
            }
        )
            .then((res) => {
                if (res.data.success) {
                    return res.data.data[0] || undefined;
                }
                return undefined;
            })
    }

    async debit(wallet: string, money: Money, memo: string, type: WalletHistoryType = "normal") {
        let toPost = {
            ...money,
            memo,
            type
        }

        return Axios.post(
            `${this.url}/${wallet}/debit`,
            toPost,
            {
                withCredentials: true,
                headers: {
                    ...this.defaultHeaders,
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }
        )
            .then((res) => {
                if (res.data.success) {
                    return res.data as CreditOrDebitResult;
                }
            })
    }

    async credit(wallet: string, money: Money, memo: string, type: WalletHistoryType = "normal") {
        let toPost = {
            ...money,
            memo,
            type
        }

        return Axios.post(
            `${this.url}/${wallet}/credit`,
            toPost,
            {
                withCredentials: true,
                headers: {
                    ...this.defaultHeaders,
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }
        )
            .then((res) => {
                if (res.data.success) {
                    return res.data as CreditOrDebitResult;
                }
            })
    }

    async verifyPIN(data: { walletId: string;pin: string}) {
        
        return Axios.post(
            `${this.url}/pins/verify`,
            data,
            {
                withCredentials: true,
                headers: {
                    ...this.defaultHeaders,
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }
        )
            .then((res) => {
                if (res.data.success) {
                    return true;
                }
                return false
            }
            , () => {
                return false
            })
    }

}

export default WalletServiceClient;