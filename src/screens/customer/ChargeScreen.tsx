import { useState } from "react";
import { CheckCircle2, Banknote } from "lucide-react";
import { TopBar } from "../../components/TopBar";
import { COLOR } from "../../styles/tokens";

interface ChargeScreenProps {
  balance: number;
  onCharge: (amount: number) => void;
  onBack: () => void;
}

const AMOUNTS = [1000, 3000, 5000, 10000];

export function ChargeScreen({ balance, onCharge, onBack }: ChargeScreenProps) {
  const [done, setDone] = useState<number | null>(null);

  if (done !== null) {
    return (
      <div className="flex-1 flex flex-col">
        <TopBar title="お金を入れる" onBack={onBack} />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
          <CheckCircle2 size={84} strokeWidth={2} color={COLOR.good} />
          <p className="text-2xl font-black" style={{ color: COLOR.ink }}>
            {done.toLocaleString()}円 入りました
          </p>
          <p className="text-xl font-bold" style={{ color: COLOR.skyDeep }}>
            今のおかね：{balance.toLocaleString()}円
          </p>
          <button
            onClick={onBack}
            className="mt-6 w-full rounded-2xl px-5 py-4 font-black text-xl text-white"
            style={{ backgroundColor: COLOR.sky }}
          >
            ホームへもどる
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <TopBar title="お金を入れる" onBack={onBack} />
      <div className="flex-1 px-5 py-6 flex flex-col gap-4">
        <p className="text-xl font-black text-center" style={{ color: COLOR.ink }}>
          入れる金額を選んでください
        </p>
        <div className="grid grid-cols-1 gap-4 mt-2">
          {AMOUNTS.map((amt) => (
            <button
              key={amt}
              onClick={() => {
                onCharge(amt);
                setDone(amt);
              }}
              className="rounded-2xl py-6 text-3xl font-black text-white active:scale-[0.97] shadow-md flex items-center justify-center gap-3"
              style={{ backgroundColor: COLOR.sky }}
            >
              <Banknote size={32} />
              {amt.toLocaleString()}円
            </button>
          ))}
        </div>
        <p className="text-center text-slate-600 font-bold mt-2">
          ※このがめんはお店の人に見せる必要はありません
        </p>
      </div>
    </div>
  );
}
