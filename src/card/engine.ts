import { nanoid } from "nanoid";

export function strReverse(str: string) {
    let reversed = "";
    let length = str.length;
    for (let i = 0; i < length; i++) {
        reversed += str[length - i - 1];
    }
    return reversed;
}

export function* generateBatch(serial: string, volume: number, type: string, currency: string, name: string, color: string,
    website: string, address: string, phone: string, email: string, notice: string
) {
    let realNumber = parseInt(volume + "");
    let seed = Date.now();

    for (let i = 0; i < realNumber; i++) {
        let code = serial + strReverse((seed + i) + "").substring(0, 12);

        yield {
            id: code,
            serial,
            read: nanoid(21),
            write: nanoid(21),
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
        }
    }
}