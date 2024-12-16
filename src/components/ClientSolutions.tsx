"use client";

import React from "react";
import {
  FileText,
  PanelsTopLeft,
  StickyNote,
  ScrollText,
  BookCheck,
  NotebookPen,
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { clientSolutionsTranslations } from "@/translations";

export function ClientSolutions() {
  const { language } = useLanguage();
  const t = clientSolutionsTranslations[language];

  const icons = {
    FileText: FileText,
    PanelsTopLeft: PanelsTopLeft,
    StickyNote: StickyNote,
    ScrollText: ScrollText,
    BookCheck: BookCheck,
    NotebookPen: NotebookPen,
  };

  return (
    <div
      id="client-solutions"
      className="mx-auto max-w-7xl px-6 py-12 mt-35 lg:px-8"
    >
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          {t.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">{t.description}</p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {t.solutions.map((solution: { name: string; description: string; icon: string }) => {
            const Icon = icons[solution.icon as keyof typeof icons];
            
            return (
              <div key={solution.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-300">
                    <Icon
                      className="h-5 w-5 text-gray-900"
                      aria-hidden="true"
                      strokeWidth="1.5"
                    />
                  </div>
                  {solution.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {solution.description}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
