/**
 * デザイントークン：黒・白・水色を基調とした
 * ユニバーサルデザイン（UD）カラーパレット。
 * tailwind.config.js の theme.extend.colors と対応している。
 */
export const COLOR = {
  ink: "#0F172A", // ほぼ黒（文字・枠線）
  paper: "#FFFFFF", // 白（背景）
  sky: "#0284C7", // メインの水色（主要ボタン）
  skyDeep: "#075985", // 濃い水色（押した時・強調文字）
  skyPale: "#E0F2FE", // 淡い水色（背景アクセント）
  good: "#15803D", // 成功・完了
  warn: "#B91C1C", // 取り消し・注意
  warnPale: "#FEE2E2",
} as const;
