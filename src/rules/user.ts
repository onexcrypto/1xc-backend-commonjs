import { UserRule } from "./types";
import { RuleFn, RuleUtils } from "./utils";

export class SubAccountConstraints {
    rules: UserRule[];

    constructor(rules: UserRule[] | undefined) {
        this.rules = rules || [];
    }

    haveSubaccounts() {
        let rule = RuleUtils.findLatestRule(this.rules, (r, i) => {
            return r.name === "subaccounts"
        });
        return RuleFn(rule);
    }

}