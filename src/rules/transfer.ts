import { UserRule } from "./types";
import { RuleFn, RuleUtils } from "./utils";

export class TransferConstraints {
    rules: UserRule[];

    constructor(rules: UserRule[] | undefined) {
        this.rules = rules || [];
    }

    canTransfer() {
        let rule = RuleUtils.findLatestRule(this.rules, (r, i) => {
            return r.name === "wallet.transfer"
        });
        return RuleFn(rule);
    }

}