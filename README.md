# 地域マネー（チーキマネー）フロントエンドモック

高齢者・個人商店の利用を想定した、ユニバーサルデザイン（UD）最優先の
地域電子決済アプリのフロントエンドモックです。React + TypeScript + Vite + Tailwind CSS で構築しています。

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

## ビルド

```bash
npm run build
npm run preview
```

## フォルダ構成

```
chiiki-money-app/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── src/
    ├── main.tsx              # エントリーポイント
    ├── App.tsx                # ルート：画面遷移・状態管理
    ├── types/
    │   └── index.ts           # 型定義（AppMode, TransactionRecord など）
    ├── styles/
    │   ├── index.css          # Tailwindベーススタイル
    │   └── tokens.ts          # カラートークン（黒・白・水色）
    ├── components/            # 共通UIパーツ
    │   ├── Frame.tsx           # スマホ枠レイアウト
    │   ├── TopBar.tsx          # 上部バー（もどるボタン）
    │   ├── BigButton.tsx       # 大型タップボタン
    │   ├── ModeToggle.tsx      # お客さん用／お店用の切替
    │   └── PseudoQR.tsx        # 擬似QRコード表示
    └── screens/
        ├── customer/
        │   ├── CustomerHome.tsx    # ホーム（残高＋QR＋導線）
        │   ├── ChargeScreen.tsx    # お金を入れる
        │   ├── HistoryScreen.tsx   # つかった記録
        │   └── SettingsScreen.tsx  # じぶんの設定
        └── store/
            └── StoreScreen.tsx     # お店用：読み取り・受け取り
```

## 状態管理について

このモックでは残高・取引履歴・画面遷移は `App.tsx` 内の React state（`useState`）で
シミュレートしています。ページを再読み込みすると初期値（残高5,300円）に戻ります。
実際のサービス化にあたっては、API連携やLocalStorage/バックエンドとの同期に置き換えてください。

## デザインの考え方

- **カラー**：黒（`ink`）・白（`paper`）・水色（`sky`）を基調。コントラスト比を確保し、
  重要な操作は塗りつぶしの水色ボタンで統一。
- **文字**：全体的に大きめ・太字（`font-black` / `font-bold`）を基本にしています。
- **言葉遣い**：「チャージ」→「お金を入れる」など、専門用語を避けた表現に統一。
- **安心設計**：全画面共通の「もどる」ボタン、お金を入れた直後のみ表示される
  「元に戻す」特大ボタンなど、誤操作からの復帰を最優先に設計しています。
