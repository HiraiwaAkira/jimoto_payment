import type { ReactNode } from "react";
import { COLOR } from "../styles/tokens";

/**
 * スマホ／タブレット画面を模した外枠。
 * ブラウザで確認しやすいよう中央に固定幅で表示する。
 */
export function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 py-6">
      <div
        className="w-full max-w-sm bg-white flex flex-col rounded-[2rem] overflow-hidden border-4"
        style={{ borderColor: COLOR.ink, minHeight: "780px" }}
      >
        {children}
      </div>
    </div>
  );
}
