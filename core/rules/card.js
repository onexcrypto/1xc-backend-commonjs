"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardConstraints = void 0;
const utils_1 = require("./utils");
class CardConstraints {
    rules;
    constructor(rules) {
        this.rules = rules || [];
    }
    get emit() {
        let rule = utils_1.RuleUtils.findLatestRule(this.rules, (r, i) => {
            return r.name === "card.emit" && r.status === "allow";
        });
        if (rule) {
            return rule;
        }
        return undefined;
    }
    get cardSerial() {
        return this.emit?.metadata.card.serial;
    }
    get transferReceptionWallet() {
        return this.emit?.metadata.transfer?.receptionWallet;
    }
    get transferPricing() {
        return this.emit?.metadata.transfer?.pricing;
    }
    get usableWalletConstraints() {
        return this.emit?.metadata.wallet;
    }
    scanCardWithCode(code) {
        let rule = utils_1.RuleUtils.findLatestRule(this.rules, (r, i) => {
            return r.name === "card.scan" && Boolean(r.metadata.cards.find((c) => c === code));
        });
        if (rule) {
            return (0, utils_1.RuleFn)(rule);
        }
        return (0, utils_1.RuleFn)(undefined);
    }
    scanCardWithUser(uid) {
        let rule = utils_1.RuleUtils.findLatestRule(this.rules, (r, i) => {
            return r.name === "card.scan" && Boolean(r.metadata.owners.find((c) => c === uid));
        });
        if (rule) {
            return (0, utils_1.RuleFn)(rule);
        }
        return (0, utils_1.RuleFn)(undefined);
    }
    scanCardWithWallet(wid) {
        let rule = utils_1.RuleUtils.findLatestRule(this.rules, (r, i) => {
            return r.name === "card.scan" && Boolean(r.metadata.wallets.find((c) => c === wid));
        });
        if (rule) {
            return (0, utils_1.RuleFn)(rule);
        }
        return (0, utils_1.RuleFn)(undefined);
    }
}
exports.CardConstraints = CardConstraints;
