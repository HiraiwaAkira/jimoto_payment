import { useState } from "react";
import { CheckCircle2, ScanLine } from "lucide-react";
import { TopBar } from "../../components/TopBar";
import { COLOR } from "../../styles/tokens";

type Step = "input" | "scanning" | "done";

interface StoreScreenProps {
  onComplete: (amount: number) => void;
}

const KEYPAD: Array<number | "C" | "⌫"> = [1, 2, 3, 4, 5, 6, 7, 8, 9, "C", 0, "⌫"];

export function StoreScreen({ onComplete }: StoreScreenProps) {
  const [step, setStep] = useState<Step>("input");
  const [amount, setAmount] = useState("");

  const startScan = () => {
    if (!amount || Number(amount) <= 0) return;
    setStep("scanning");
    setTimeout(() => {
      setStep("done");
    }, 1600);
  };

  const goNext = () => {
    if (step === "done") onComplete(Number(amount));
    setStep("input");
    setAmount("");
  };

  return (
    <div className="flex-1 flex flex-col">
      <TopBar title="お店用：お金を受け取る" />
      <div className="flex-1 px-5 py-6 flex flex-col gap-5">
        {step === "input" && (
          <>
            <p className="text-xl font-black text-center" style={{ color: COLOR.ink }}>
              金額を入力してください
            </p>
            <div
              className="rounded-2xl px-4 py-5 text-center text-4xl font-black"
              style={{ border: `3px solid ${COLOR.ink}`, color: COLOR.skyDeep }}
            >
              {amount ? Number(amount).toLocaleString() : "0"}
              <span className="text-2xl">円</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {KEYPAD.map((k, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (k === "C") setAmount("");
                    else if (k === "⌫") setAmount((a) => a.slice(0, -1));
                    else setAmount((a) => (a + String(k)).slice(0, 7));
                  }}
                  className="rounded-xl py-4 text-2xl font-black active:scale-95"
                  style={{ border: `2px solid ${COLOR.ink}`, color: COLOR.ink }}
                >
                  {k}
                </button>
              ))}
            </div>
            <button
              disabled={!amount || Number(amount) <= 0}
              onClick={startScan}
              className="mt-2 w-full rounded-2xl py-5 text-2xl font-black text-white flex items-center justify-center gap-3 disabled:opacity-40"
              style={{ backgroundColor: COLOR.sky }}
            >
              <ScanLine size={30} />
              読み取り開始
            </button>
          </>
        )}

        {step === "scanning" && (
          <div className="flex-1 flex flex-col items-center justify-center gap-5">
            <div
              className="w-56 h-56 rounded-3xl flex items-center justify-center animate-pulse"
              style={{ border: `5px dashed ${COLOR.sky}`, backgroundColor: COLOR.skyPale }}
            >
              <ScanLine size={64} color={COLOR.sky} />
            </div>
            <p className="text-xl font-black" style={{ color: COLOR.ink }}>
              読み取り中です…
            </p>
            <p className="text-base font-bold text-slate-600">お客さまのがめんに合わせてください</p>
          </div>
        )}

        {step === "done" && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
            <CheckCircle2 size={80} color={COLOR.good} />
            <p className="text-2xl font-black" style={{ color: COLOR.ink }}>
              {Number(amount).toLocaleString()}円 受け取りました
            </p>
            <button
              onClick={goNext}
              className="mt-4 w-full rounded-2xl py-4 text-xl font-black text-white"
              style={{ backgroundColor: COLOR.sky }}
            >
              つぎのお客さまへ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
