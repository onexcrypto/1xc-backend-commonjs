import { UserRule } from "./types";
export declare class SubAccountConstraints {
    rules: UserRule[];
    constructor(rules: UserRule[] | undefined);
    haveSubaccounts(): {
        rule: import("./types").IRuleCardScan | import("./types").IRuleCardEmit | import("./types").IRuleExchange | import("./types").IRuleTransfer | import("./types").IRuleUser | undefined;
        isAllowed: boolean;
        isDenied: boolean;
    };
}
