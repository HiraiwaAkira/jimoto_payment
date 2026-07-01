import { User } from "lucide-react";
import { TopBar } from "../../components/TopBar";
import { COLOR } from "../../styles/tokens";

interface SettingsScreenProps {
  onBack: () => void;
}

export function SettingsScreen({ onBack }: SettingsScreenProps) {
  return (
    <div className="flex-1 flex flex-col">
      <TopBar title="じぶんの設定" onBack={onBack} />
      <div className="flex-1 px-5 py-6 flex flex-col gap-4">
        <div className="flex items-center gap-4 rounded-2xl px-4 py-4" style={{ border: `3px solid ${COLOR.ink}` }}>
          <span className="rounded-full p-3" style={{ backgroundColor: COLOR.skyPale }}>
            <User size={32} color={COLOR.sky} />
          </span>
          <div>
            <p className="text-xl font-black" style={{ color: COLOR.ink }}>
              やまだ たろう さん
            </p>
            <p className="text-base font-bold text-slate-600">会員ばんごう：0123</p>
          </div>
        </div>
        <p className="text-base font-bold text-slate-500 text-center mt-4">
          こまったときは、お近くの窓口か
          <br />
          ご家族にご相談ください。
        </p>
      </div>
    </div>
  );
}
