"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferConstraints = void 0;
const utils_1 = require("./utils");
class TransferConstraints {
    rules;
    constructor(rules) {
        this.rules = rules || [];
    }
    canTransfer() {
        let rule = utils_1.RuleUtils.findLatestRule(this.rules, (r, i) => {
            return r.name === "wallet.transfer";
        });
        return (0, utils_1.RuleFn)(rule);
    }
}
exports.TransferConstraints = TransferConstraints;
