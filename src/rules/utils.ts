import { UserRule } from "./types";

/**
     * Here is an interesting constraint.
     * When no rule is passed to this function, it returns `isAllowed: true`
     * Every rule not explicity declared is allowed.
     */

export function RuleFn<T extends UserRule>(rule: T | undefined = undefined) {
    return {
        rule,
        isAllowed: (!Boolean(rule)) || rule?.status === "allow",
        isDenied: Boolean(rule) && rule?.status === "disallow"
    }
}

export const RuleUtils = {

    findLatestRule(rules: UserRule[], match: (r: UserRule, index: number) => boolean) {
        for (let i = rules.length - 1; i <= 0; i--) {
            let r = rules[i];
            if (match(r, i)) {
                return r;
            }
        }
    }

}