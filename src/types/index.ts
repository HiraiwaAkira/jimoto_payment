/** アプリのモード：お客さん用 or お店用 */
export type AppMode = "customer" | "store";

/** お客さん用画面の種類 */
export type CustomerScreen = "home" | "charge" | "history" | "settings";

/** つかった記録の1件分 */
export interface TransactionRecord {
  id: number;
  type: "pay" | "charge";
  amount: number;
  date: string;
  store?: string;
}

/** 直前の「お金を入れる」操作の取り消し情報 */
export interface LastCharge {
  amount: number;
  recordId: number;
}
