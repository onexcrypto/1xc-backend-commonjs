import { UserRule } from "./types";
/**
     * Here is an interesting constraint.
     * When no rule is passed to this function, it returns `isAllowed: true`
     * Every rule not explicity declared is allowed.
     */
export declare function RuleFn<T extends UserRule>(rule?: T | undefined): {
    rule: T | undefined;
    isAllowed: boolean;
    isDenied: boolean;
};
export declare const RuleUtils: {
    findLatestRule(rules: UserRule[], match: (r: UserRule, index: number) => boolean): UserRule | undefined;
};
