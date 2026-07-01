import { useRef, useState } from "react";
import { Frame } from "./components/Frame";
import { ModeToggle } from "./components/ModeToggle";
import { CustomerHome } from "./screens/customer/CustomerHome";
import { ChargeScreen } from "./screens/customer/ChargeScreen";
import { HistoryScreen } from "./screens/customer/HistoryScreen";
import { SettingsScreen } from "./screens/customer/SettingsScreen";
import { StoreScreen } from "./screens/store/StoreScreen";
import type { AppMode, CustomerScreen, LastCharge, TransactionRecord } from "./types";

const INITIAL_RECORDS: TransactionRecord[] = [
  { id: 0, type: "pay", store: "やまだ商店", amount: 500, date: "6月28日" },
  { id: -1, type: "charge", amount: 3000, date: "6月20日" },
];

function today(): string {
  const d = new Date();
  return `${d.getMonth() + 1}月${d.getDate()}日`;
}

export default function App() {
  const [mode, setMode] = useState<AppMode>("customer");
  const [screen, setScreen] = useState<CustomerScreen>("home");
  const [balance, setBalance] = useState(5300);
  const [lastCharge, setLastCharge] = useState<LastCharge | null>(null);
  const [records, setRecords] = useState<TransactionRecord[]>(INITIAL_RECORDS);
  const idRef = useRef(1);

  const handleCharge = (amount: number) => {
    setBalance((b) => b + amount);
    const recordId = idRef.current++;
    setRecords((r) => [{ id: recordId, type: "charge", amount, date: today() }, ...r]);
    setLastCharge({ amount, recordId });
  };

  const handleUndoCharge = () => {
    if (!lastCharge) return;
    setBalance((b) => b - lastCharge.amount);
    setRecords((r) => r.filter((rec) => rec.id !== lastCharge.recordId));
    setLastCharge(null);
  };

  const handleStorePayment = (amount: number) => {
    setBalance((b) => Math.max(0, b - amount));
    const recordId = idRef.current++;
    setRecords((r) => [{ id: recordId, type: "pay", store: "このお店", amount, date: today() }, ...r]);
  };

  const navigate = (next: CustomerScreen) => {
    // お金を入れる画面から離れたら「取り消し」表示はクリアする
    if (screen !== "charge") setLastCharge(null);
    setScreen(next);
  };

  const handleModeChange = (next: AppMode) => {
    setMode(next);
    setScreen("home");
  };

  let body: React.ReactNode;
  if (mode === "customer") {
    switch (screen) {
      case "charge":
        body = <ChargeScreen balance={balance} onCharge={handleCharge} onBack={() => navigate("home")} />;
        break;
      case "history":
        body = <HistoryScreen records={records} onBack={() => navigate("home")} />;
        break;
      case "settings":
        body = <SettingsScreen onBack={() => navigate("home")} />;
        break;
      default:
        body = (
          <CustomerHome
            balance={balance}
            onNav={navigate}
            lastCharge={lastCharge}
            onUndoCharge={handleUndoCharge}
          />
        );
    }
  } else {
    body = <StoreScreen onComplete={handleStorePayment} />;
  }

  return (
    <Frame>
      <ModeToggle mode={mode} setMode={handleModeChange} />
      {body}
    </Frame>
  );
}
