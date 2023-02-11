import { UserRule } from "./types";
import { RuleFn, RuleUtils } from "./utils";

export class ExchangeConstraints {
    rules: UserRule[];

    constructor(rules: UserRule[] | undefined) {
        this.rules = rules || [];
    }

    canExchange() {
        let rule = RuleUtils.findLatestRule(this.rules, (r, i) => {
            return r.name === "exchanges"
        });
        return RuleFn(rule);
    }

}