import { UserRule } from "./types";
export declare class ExchangeConstraints {
    rules: UserRule[];
    constructor(rules: UserRule[] | undefined);
    canExchange(): {
        rule: import("./types").IRuleCardScan | import("./types").IRuleCardEmit | import("./types").IRuleExchange | import("./types").IRuleTransfer | undefined;
        isAllowed: boolean;
        isDenied: boolean;
    };
}
