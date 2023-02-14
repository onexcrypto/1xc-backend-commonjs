"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBatch = exports.strReverse = void 0;
const nanoid_1 = require("nanoid");
function strReverse(str) {
    let reversed = "";
    let length = str.length;
    for (let i = 0; i < length; i++) {
        reversed += str[length - i - 1];
    }
    return reversed;
}
exports.strReverse = strReverse;
function* generateBatch(serial, volume, type, currency, name, color, website, address, phone, email, notice) {
    let realNumber = parseInt(volume + "");
    let seed = Date.now();
    for (let i = 0; i < realNumber; i++) {
        let code = serial + strReverse((seed + i) + "").substring(0, 12);
        yield {
            id: code,
            serial,
            read: (0, nanoid_1.nanoid)(21),
            write: (0, nanoid_1.nanoid)(21),
            type,
            currency,
            generatedAt: Date.now(),
            boundWallet: {},
            name,
            color,
            website,
            address,
            phone,
            email,
            notice
        };
    }
}
exports.generateBatch = generateBatch;
