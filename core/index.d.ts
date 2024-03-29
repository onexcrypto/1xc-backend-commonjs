import { NetworkRule } from "./investor";
import { PriceStep } from "./pricing";
import { ScopedRole } from "./roles";
import { UserRule } from "./rules";
interface Indexable {
    id: string;
}
interface Patchable {
    updatedAt: number;
}
interface Insertable {
    insertedAt: number;
}
export interface Money {
    amount: number;
    currency: string;
}
export interface TransfertProperties {
    pricings: {
        [key: string]: PriceStep[];
    };
    webPricings?: {
        [key: string]: PriceStep[];
    };
}
export interface SystemProperties {
    wallets: {
        businessAccountFee: Money;
        allowedCurrencies: string[];
    };
    investment?: NetworkRule;
    transfert?: TransfertProperties;
}
export interface OnlineApiAccount {
    publicKey: string;
    privateKey: string;
}
export interface CoinbaseAccount extends OnlineApiAccount {
}
export interface FedaPayAccount extends OnlineApiAccount {
}
export interface PerfectMoneyAccount {
    accountId: string;
    passphrase: string;
    alternatePassphrase: string;
}
export type MethodAccountType = "perfectmoney" | "coinbase" | "fedapay";
export interface MethodAccount extends Indexable {
    type: MethodAccountType;
    details: OnlineApiAccount | FedaPayAccount | CoinbaseAccount | PerfectMoneyAccount;
}
export interface KeyValue {
    [key: string]: any;
}
export type Gender = "male" | "female";
export type UserStatus = "active" | "disabled";
export interface User extends Indexable, Insertable, Patchable {
    firstName: string;
    lastName: string;
    gender: Gender;
    email: string;
    passwordHash?: string;
}
export interface AccountVerificationCode extends Indexable {
    userId: string;
    code: string;
}
type AccountType = "std" | "mp" | "wm" | "pos" | "sm";
/**
 * Represents media (images/ audio / video) content stored on the bucket;
 */
type Media = {
    url: string;
    name: string;
    type: string;
    size?: number;
};
export interface Customer extends User {
    status: UserStatus;
    country: string;
    verified: boolean;
    isMerchant: boolean;
    type: AccountType;
    rules?: UserRule[];
    /**
     * This field is available only for POS Users who can emit cards.
     * It is printed on the generated card.
     */
    logo?: Media;
    parentId?: string;
    documents?: {
        ifu: Media;
        id: Media;
        rccm: Media;
    };
}
export type WalletType = "business" | "standard";
export interface Wallet extends Indexable, Insertable, Patchable {
    userId: string;
    type: WalletType;
    balance: Money;
    isMain: boolean;
    isAnonymous?: boolean;
}
export interface WalletPIN extends Indexable, Insertable, Patchable {
    pinHash: string;
    walletId: string;
}
export type WalletHistoryType = "commission" | "normal";
export interface WalletHistory extends Indexable, Insertable, Money {
    type: WalletHistoryType;
    walletId: string;
    memo: string;
}
export interface WalletRegistrationEntry extends Indexable, Insertable {
    userId: string;
    walletId: string;
    sourceWalletId: string;
    historyId: string;
    fee: Money;
}
export interface Admin extends Indexable, Insertable {
    firstName: string;
    lastName: string;
    gender: Gender;
    alias: string;
    passwordHash?: string;
    status: "active" | "disabled";
    genesis: boolean;
}
export interface AdminWithRoles {
    profile: Admin;
    roles: ScopedRole[];
}
export type DocType = "cni" | "ifu" | "rc";
export interface Document {
    docType: DocType;
    fileType: string;
    name: string;
    verified: boolean;
}
export type BusinessProfileStatus = "pending" | "verified" | "rejected";
export interface BusinessProfile extends Indexable, Insertable, Patchable {
    name: string;
    userId: string;
    country: string;
    city: string;
    phone: string;
    email: string;
    documents: Document[];
    verificationDate?: number;
    status: BusinessProfileStatus;
    corrections?: IBusinessCorrection[];
}
interface AppType<Name> {
    type: Name;
}
type AppMobileVariant = 'android' | 'ios';
type AppWebVariant = 'site' | 'ip';
interface AppVariant<Variant> {
    variant: Variant;
}
export interface AppWebArea {
    url: string;
}
export interface AppMobileArea {
    url: string;
    packageID?: string;
}
export interface AppArea {
    projectId: string;
}
export type AppWeb = AppType<'web'> & AppVariant<AppWebVariant> & AppWebArea;
export type AppMobile = AppType<'mobile'> & AppVariant<AppMobileVariant> & AppMobileArea;
export type Application = Insertable & Indexable & Patchable & (AppWeb | AppMobile) & AppArea;
export interface Project extends Indexable, Insertable, Patchable {
    name: string;
    description?: string;
    commissionRate: number;
    logo: string;
    walletId: string;
    userId: string;
}
export type PaymentStatus = "pending" | "confirmed" | "cancelled" | "paid";
export type BusinessPIStatus = PaymentStatus | "failed" | "expired";
export interface BusinessPaymentIntent extends Money, Indexable, Insertable {
    responseURL: string;
    projectId: string;
    status: BusinessPIStatus;
    emissionDate: number;
    paymentURL: string;
    reason?: string;
    confirmedAt?: number;
    paidAt?: number;
    cancelledAt?: number;
    userId?: string;
    walletId?: string;
    failureText?: string;
    transactionId?: string;
    payload?: KeyValue;
}
export interface BusinessPayment extends Indexable, Insertable {
    intentId: string;
    transactionId: string;
    walletSource: string;
    walletDest: string;
    userId: string;
    merchantId: string;
}
export interface IBusinessCorrection {
    title: String;
    content: String;
    submittedAt: number;
}
export type MethodCategory = "banking" | "card" | "mobile" | "transfer" | "cryptocurrency";
export interface AmountLimitation {
    minAmount: number;
    maxAmount: number;
    staticFee: number;
    dynamicFee: number;
    emitterFee: number;
    percentage: number;
    pattern: string;
}
export interface BankingDetails extends AmountLimitation {
    currency: string;
    account: string;
}
export interface MobileDetails extends AmountLimitation {
    address: string;
    currency: string;
    country: string;
    entranceFee?: {
        static: number;
        dynamic: number;
    };
}
export interface TransferDetails extends AmountLimitation {
    currency: string;
}
export interface CardDetails extends AmountLimitation {
    currency: string;
    country: string;
}
export interface CryptoCurrencyDetails extends AmountLimitation {
}
export type MethodDetails = BankingDetails | MobileDetails | TransferDetails | CardDetails | CryptoCurrencyDetails;
export interface Method extends Indexable, Insertable, Patchable {
    category: MethodCategory;
    type: string;
    label: string;
    icon: string;
    color?: string;
    allowSell: boolean;
    allowBuy: boolean;
    availableAmount?: number;
    addedAt?: number;
    details: MethodDetails;
}
export type TicketStatus = PaymentStatus;
export interface CardRechargeData {
    holder: string;
    identifier: string;
}
export interface Ticket extends Indexable {
    id: string;
    userId: string;
    source: Method;
    dest: Method;
    amount: number;
    rate: number;
    address: string;
    card?: CardRechargeData;
    allowed: boolean;
    enableCommission: boolean;
    status: TicketStatus;
    emissionDate: number;
    confirmedAt?: number;
    paidAt?: number;
    cancelledAt?: number;
}
export interface TicketPayment extends Indexable, Money {
    ticketId: string;
    type: string;
    address: string;
    paymentUrl: string;
}
export type TxType = "in" | "out";
export type TxStatus = "pending" | "done";
export interface Transaction extends Indexable, Insertable {
    ticketId: string;
    variant: TxType;
    type: string;
    amount: number;
    currency: string;
    source: string;
    dest: string;
    reference: string;
    status: TxStatus;
    insertedAt: number;
    validatedAt?: number;
}
export interface ExchangeCalculation {
    source: string;
    dest: string;
    rate: number;
    amount: number;
    converted: number;
    rateApplied: number;
}
export interface AccessToken extends Insertable, Patchable {
    read: string;
    write: string;
    hash: string;
    owner: string;
    label?: string;
    rights: string[];
    projectId?: string;
}
export interface WalletTransfer extends Indexable, Insertable {
    sender: {
        id: string;
        wallet: string;
        type: WalletType;
    };
    receiver: {
        id: string;
        wallet: string;
        type: WalletType;
    };
    appliedRate: number;
    sent: Money;
    received: Money;
    fees: Money;
    earning?: Money;
    proofs: {
        sender: string;
        receiver: string;
    };
    status: "completed";
    reason?: string;
    metadata: any;
}
export interface GeneratedCard {
    id: string;
    serial: string;
    read: string;
    write: string;
    type: string;
    currency: string;
    generatedAt: number;
    boundWallet: {
        id: string;
        balance: Money;
    };
    name: string;
    color: string;
    website: string;
    address: string;
    phone: string;
    email: string;
    notice: string;
}
type OrderStatus = "pending" | "accepted" | "rejected" | "processing" | "delivered" | "delivered" | "cancelled";
export interface ICardGenerationRequest extends Indexable, Insertable {
    userId: string;
    paymentId: string;
    cards: GeneratedCard[];
    status?: OrderStatus;
}
export interface IAccessControl {
    path: string;
    allowed: boolean;
    allowedHeaders: string[];
    allowedMethods: string[];
}
export interface ICorsOrigin extends Indexable, Insertable, Patchable {
    origin: string;
    enabled: boolean;
    allowedAllAccess?: boolean;
    accessControls?: IAccessControl[];
}
export * from './Logger';
export * from './clients';
export * from './collection';
export * from './investor';
export * from './peers';
export * from './roles';
export * from "./rules";
export * from "./resumes";
export * from './utils';
export * from "./pricing";
export * from './middlewares/index';
export * from "./global";
export * from "./card";
