import { PlusCircle, History, Settings, RotateCcw } from "lucide-react";
import { TopBar } from "../../components/TopBar";
import { BigButton } from "../../components/BigButton";
import { PseudoQR } from "../../components/PseudoQR";
import { COLOR } from "../../styles/tokens";
import type { CustomerScreen, LastCharge } from "../../types";

interface CustomerHomeProps {
  balance: number;
  onNav: (screen: CustomerScreen) => void;
  lastCharge: LastCharge | null;
  onUndoCharge: () => void;
}

export function CustomerHome({ balance, onNav, lastCharge, onUndoCharge }: CustomerHomeProps) {
  return (
    <div className="flex-1 flex flex-col">
      <TopBar
        title="ホーム"
        right={
          <button onClick={() => onNav("settings")} className="active:opacity-60">
            <Settings size={28} strokeWidth={2.5} color={COLOR.ink} />
          </button>
        }
      />
      <div className="flex-1 px-5 py-4 flex flex-col gap-5">
        {/* 残高 */}
        <div
          className="rounded-2xl px-5 py-4 text-center"
          style={{ backgroundColor: COLOR.skyPale, border: `3px solid ${COLOR.ink}` }}
        >
          <p className="text-lg font-bold" style={{ color: COLOR.ink }}>
            今のおかね
          </p>
          <p className="text-5xl font-black mt-1" style={{ color: COLOR.skyDeep }}>
            {balance.toLocaleString()}
            <span className="text-2xl ml-1">円</span>
          </p>
        </div>

        {/* 取り消し（直前にお金を入れた場合のみ表示） */}
        {lastCharge && (
          <button
            onClick={onUndoCharge}
            className="w-full rounded-2xl px-4 py-4 flex items-center justify-center gap-3 font-black text-xl active:scale-[0.98]"
            style={{ backgroundColor: COLOR.warnPale, color: COLOR.warn, border: `3px solid ${COLOR.warn}` }}
          >
            <RotateCcw size={26} strokeWidth={3} />
            今のは間違い！元に戻す
          </button>
        )}

        {/* QRコード（最重要：お店に見せる画面） */}
        <div className="flex-1 flex flex-col items-center justify-center gap-3">
          <p className="text-xl font-black" style={{ color: COLOR.ink }}>
            この画面をお店の人に見せてください
          </p>
          <div
            className="p-4 rounded-3xl"
            style={{
              border: `5px solid ${COLOR.sky}`,
              boxShadow: `0 0 0 6px ${COLOR.skyPale}`,
            }}
          >
            <PseudoQR seed={balance} size={220} />
          </div>
          <p className="text-base font-bold text-slate-600">お店の人がこれを読み取ります</p>
        </div>

        {/* 主要導線 */}
        <div className="flex flex-col gap-3 pb-2">
          <BigButton icon={PlusCircle} onClick={() => onNav("charge")} sub="げんきんでおかねを入れます">
            お金を入れる
          </BigButton>
          <BigButton icon={History} onClick={() => onNav("history")} color="outline" sub="いつ・どこで・いくら">
            つかった記録を見る
          </BigButton>
        </div>
      </div>
    </div>
  );
}
