import { IRuleCardEmit, IRuleCardScan, UserRule } from "./types";
import { RuleFn, RuleUtils } from "./utils";

export class CardConstraints {
    rules: UserRule[];

    constructor(rules: UserRule[] | undefined) {
        this.rules = rules || [];
    }

    get emit() {
        let rule = RuleUtils.findLatestRule(this.rules, (r, i) => {
            return r.name === "card.emit" && r.status === "allow";
        })
        if (rule) {
            return rule as IRuleCardEmit;
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

    scanCardWithCode(code: string) {
        let rule = RuleUtils.findLatestRule(this.rules, (r, i) => {
            return r.name === "card.scan" && Boolean(r.metadata.cards.find((c) => c === code));
        })
        if (rule) {
            return RuleFn(rule as IRuleCardScan);
        }
        return RuleFn(undefined);
    }

    scanCardWithUser(uid: string) {
        let rule = RuleUtils.findLatestRule(this.rules, (r, i) => {
            return r.name === "card.scan" && Boolean(r.metadata.owners.find((c) => c === uid));
        })
        if (rule) {
            return RuleFn(rule as IRuleCardScan);
        }
        return RuleFn(undefined);
    }

    scanCardWithWallet(wid: string) {
        let rule = RuleUtils.findLatestRule(this.rules, (r, i) => {
            return r.name === "card.scan" && Boolean(r.metadata.wallets.find((c) => c === wid));
        })
        if (rule) {
            return RuleFn(rule as IRuleCardScan);
        }
        return RuleFn(undefined);
    }

}