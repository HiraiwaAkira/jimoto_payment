import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { COLOR } from "../styles/tokens";

interface TopBarProps {
  title: string;
  onBack?: () => void;
  right?: ReactNode;
}

/**
 * 全画面共通の上部バー。
 * 誤操作時にすぐ戻れるよう「もどる」ボタンを左上に固定表示する。
 */
export function TopBar({ title, onBack, right }: TopBarProps) {
  return (
    <div
      className="flex items-center justify-between px-4 py-4 border-b-4"
      style={{ borderColor: COLOR.ink }}
    >
      <div className="w-24">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-1 font-bold text-lg active:opacity-60"
            style={{ color: COLOR.ink }}
          >
            <ArrowLeft size={28} strokeWidth={3} />
            もどる
          </button>
        )}
      </div>
      <h1 className="text-2xl font-black tracking-wide" style={{ color: COLOR.ink }}>
        {title}
      </h1>
      <div className="w-24 flex justify-end">{right}</div>
    </div>
  );
}
