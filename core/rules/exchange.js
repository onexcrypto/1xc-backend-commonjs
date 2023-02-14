"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeConstraints = void 0;
const utils_1 = require("./utils");
class ExchangeConstraints {
    rules;
    constructor(rules) {
        this.rules = rules || [];
    }
    canExchange() {
        let rule = utils_1.RuleUtils.findLatestRule(this.rules, (r, i) => {
            return r.name === "exchanges";
        });
        return (0, utils_1.RuleFn)(rule);
    }
}
exports.ExchangeConstraints = ExchangeConstraints;
