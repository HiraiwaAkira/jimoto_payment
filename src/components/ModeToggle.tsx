import { Store, Wallet } from "lucide-react";
import type { AppMode } from "../types";
import { COLOR } from "../styles/tokens";

interface ModeToggleProps {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
}

/** 画面上部の「お客さん用／お店用」切り替えトグル */
export function ModeToggle({ mode, setMode }: ModeToggleProps) {
  return (
    <div className="flex justify-center gap-2 px-4 py-3 bg-slate-100">
      <button
        onClick={() => setMode("customer")}
        className="flex-1 max-w-[170px] rounded-full py-2.5 font-black text-base flex items-center justify-center gap-2 active:scale-95"
        style={{
          backgroundColor: mode === "customer" ? COLOR.ink : "#fff",
          color: mode === "customer" ? "#fff" : COLOR.ink,
          border: `2px solid ${COLOR.ink}`,
        }}
      >
        <Wallet size={20} /> お客さん用
      </button>
      <button
        onClick={() => setMode("store")}
        className="flex-1 max-w-[170px] rounded-full py-2.5 font-black text-base flex items-center justify-center gap-2 active:scale-95"
        style={{
          backgroundColor: mode === "store" ? COLOR.ink : "#fff",
          color: mode === "store" ? "#fff" : COLOR.ink,
          border: `2px solid ${COLOR.ink}`,
        }}
      >
        <Store size={20} /> お店用
      </button>
    </div>
  );
}
