import { IRuleCardEmit, UserRule } from "./types";
export declare class CardConstraints {
    rules: UserRule[];
    constructor(rules: UserRule[] | undefined);
    get emit(): IRuleCardEmit | undefined;
    get cardSerial(): string | undefined;
    get transferReceptionWallet(): string | undefined;
    get transferPricing(): import("..").PriceStep[] | undefined;
    get usableWalletConstraints(): {
        type: "anonymous";
    } | undefined;
    scanCardWithCode(code: string): {
        rule: UserRule | undefined;
        isAllowed: boolean;
        isDenied: boolean;
    };
    scanCardWithUser(uid: string): {
        rule: UserRule | undefined;
        isAllowed: boolean;
        isDenied: boolean;
    };
    scanCardWithWallet(wid: string): {
        rule: UserRule | undefined;
        isAllowed: boolean;
        isDenied: boolean;
    };
}
