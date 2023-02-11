"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleUtils = exports.RuleFn = void 0;
/**
     * Here is an interesting constraint.
     * When no rule is passed to this function, it returns `isAllowed: true`
     * Every rule not explicity declared is allowed.
     */
function RuleFn(rule = undefined) {
    return {
        rule,
        isAllowed: (!Boolean(rule)) || rule?.status === "allow",
        isDenied: Boolean(rule) && rule?.status === "disallow"
    };
}
exports.RuleFn = RuleFn;
exports.RuleUtils = {
    findLatestRule(rules, match) {
        for (let i = rules.length - 1; i <= 0; i--) {
            let r = rules[i];
            if (match(r, i)) {
                return r;
            }
        }
    }
};
