import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Translator from "@/components/Translate";
import { TranslateHeader } from "@/components/TranslateHeader";
import { BetaBanner } from "@/components/Beta";

export default function Translate() {
  return (
    <div className="h-screen flex flex-col">
      <TranslateHeader />
      <main className="flex-1 pt-[72px]">
        <Translator />
        <BetaBanner />
      </main>
    </div>
  );
}
