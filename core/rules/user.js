"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAccountConstraints = void 0;
const utils_1 = require("./utils");
class SubAccountConstraints {
    rules;
    constructor(rules) {
        this.rules = rules || [];
    }
    haveSubaccounts() {
        let rule = utils_1.RuleUtils.findLatestRule(this.rules, (r, i) => {
            return r.name === "subaccounts";
        });
        return (0, utils_1.RuleFn)(rule);
    }
}
exports.SubAccountConstraints = SubAccountConstraints;
