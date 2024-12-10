"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface Language {
  code: string;
  name: string;
}

export default function LanguageDropdown() {
  const [language, setLanguage] = React.useState<"en" | "ht">("en");

  const languages: Record<"en" | "ht", Language> = {
    en: {
      code: "EN",
      name: "English",
    },
    ht: {
      code: "HT",
      name: "Kreyòl Ayisyen",
    },
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold 
                 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 
                 shadow-sm hover:shadow transition-all duration-200"
      >
        <span className="rounded-full overflow-hidden inline-flex h-5 w-5 items-center justify-center">
          <img
            src={`/flags/${languages[language].code.toLowerCase()}.svg`}
            alt={languages[language].name}
            className="h-full w-full object-cover"
          />
        </span>
        <span>{languages[language].code}</span>
        <ChevronDown className="h-3.5 w-3.5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[150px] bg-white rounded-xl shadow-lg ring-1 ring-slate-900/5 z-[10000]"
      >
        {Object.entries(languages).map(([key, lang]) => (
          <DropdownMenuItem
            key={key}
            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
            onSelect={() => setLanguage(key as "en" | "ht")}
          >
            <span className="rounded-full overflow-hidden inline-flex h-5 w-5 items-center justify-center">
              <img
                src={`/flags/${lang.code.toLowerCase()}.svg`}
                alt={lang.name}
                className="h-full w-full object-cover"
              />
            </span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
