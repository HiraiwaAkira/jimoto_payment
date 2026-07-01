import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { COLOR } from "../styles/tokens";

export type BigButtonColor = "sky" | "warn" | "outline";

interface BigButtonProps {
  children: ReactNode;
  onClick: () => void;
  color?: BigButtonColor;
  icon?: LucideIcon;
  sub?: string;
  className?: string;
}

/**
 * 高齢者・弱視の方でも押しやすい大型ボタン。
 * 主要導線（お金を入れる／記録を見る 等）に使用する。
 */
export function BigButton({
  children,
  onClick,
  color = "sky",
  icon: Icon,
  sub,
  className = "",
}: BigButtonProps) {
  const bg = color === "sky" ? COLOR.sky : color === "warn" ? COLOR.warn : COLOR.paper;
  const fg = color === "outline" ? COLOR.ink : "#FFFFFF";
  const border = color === "outline" ? `3px solid ${COLOR.ink}` : "none";

  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl px-5 py-5 flex items-center gap-4 text-left active:scale-[0.98] transition-transform shadow-md ${className}`}
      style={{ backgroundColor: bg, color: fg, border }}
    >
      {Icon && (
        <span
          className="flex items-center justify-center rounded-full p-3"
          style={{ backgroundColor: color === "outline" ? COLOR.skyPale : "rgba(255,255,255,0.2)" }}
        >
          <Icon size={32} strokeWidth={2.5} color={color === "outline" ? COLOR.sky : "#fff"} />
        </span>
      )}
      <span className="flex-1">
        <span className="block text-2xl font-black leading-snug">{children}</span>
        {sub && <span className="block text-base font-bold opacity-90 mt-1">{sub}</span>}
      </span>
      <ChevronRight size={28} strokeWidth={3} />
    </button>
  );
}
