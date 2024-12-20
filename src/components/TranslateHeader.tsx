"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/use-language";
import { headerTranslations } from "@/translations";
import { Logo } from "@/components/Logo";
import LanguageDropdown from "@/components/LanguageDropdown";

export function TranslateHeader() {
  const { language } = useLanguage();
  const t = headerTranslations[language];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white py-5 z-[9999]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between">
          <Link href="/" aria-label="Home" className="mt-4 md:mt-3">
            <Logo className="h-10 w-auto" />
          </Link>

          <div className="flex items-center gap-x-4">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold 
                        transition bg-haiti-blue text-white hover:bg-blue-700"
            >
              <span>{t.signIn}</span>
            </Link>
            <LanguageDropdown />
          </div>
        </nav>
      </div>
    </header>
  );
}
