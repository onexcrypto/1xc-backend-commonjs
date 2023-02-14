export declare function strReverse(str: string): string;
export declare function generateBatch(serial: string, volume: number, type: string, currency: string, name: string, color: string, website: string, address: string, phone: string, email: string, notice: string): Generator<{
    id: string;
    serial: string;
    read: string;
    write: string;
    type: string;
    currency: string;
    generatedAt: number;
    boundWallet: {};
    name: string;
    color: string;
    website: string;
    address: string;
    phone: string;
    email: string;
    notice: string;
}, void, unknown>;
