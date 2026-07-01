import { TopBar } from "../../components/TopBar";
import { COLOR } from "../../styles/tokens";
import type { TransactionRecord } from "../../types";

interface HistoryScreenProps {
  records: TransactionRecord[];
  onBack: () => void;
}

export function HistoryScreen({ records, onBack }: HistoryScreenProps) {
  return (
    <div className="flex-1 flex flex-col">
      <TopBar title="つかった記録" onBack={onBack} />
      <div className="flex-1 px-5 py-4 overflow-y-auto">
        {records.length === 0 && (
          <p className="text-center text-lg font-bold text-slate-500 mt-10">まだ記録がありません</p>
        )}
        <ul className="flex flex-col gap-3">
          {records.map((r) => (
            <li
              key={r.id}
              className="rounded-2xl px-4 py-3"
              style={{
                border: `3px solid ${COLOR.ink}`,
                backgroundColor: r.type === "charge" ? COLOR.skyPale : COLOR.paper,
              }}
            >
              <p className="text-sm font-bold text-slate-600">{r.date}</p>
              <p className="text-xl font-black mt-1" style={{ color: COLOR.ink }}>
                {r.type === "charge"
                  ? `お金を ${r.amount.toLocaleString()}円 入れた`
                  : `${r.store ?? "お店"} で ${r.amount.toLocaleString()}円 はらった`}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
