"use client";

import React from "react";
import { FileCheck2, UserCheck, FileInput, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { processTranslations } from "@/translations";

export default function Process() {
  const { language } = useLanguage();
  const t = processTranslations[language];

  const icons = {
    0: FileCheck2,
    1: UserCheck,
    2: FileInput,
    3: BadgeCheck,
  };

  return (
    <section
      id="process"
      className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-700">
            {t.subtitle}
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
            {t.description}
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-md gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
          {t.steps.map(
            (step: { name: string; description: string }, index: number) => {
              const StepIcon = icons[index as keyof typeof icons];
              return (
                <li
                  key={step.name}
                  className="group relative flex flex-col pl-14 sm:pl-0 sm:flex-row lg:flex-col"
                >
                  {index < t.steps.length - 1 && (
                    <span
                      className="absolute left-5 top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 sm:left-[18px] lg:left-auto lg:right-0 lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                      aria-hidden="true"
                    ></span>
                  )}
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 border border-gray-300 sm:relative sm:mb-4 lg:mb-0">
                    <StepIcon
                      className="h-5 w-5 text-gray-900"
                      aria-hidden="true"
                      strokeWidth="1.5"
                    />
                  </div>
                  <div className="sm:ml-6 lg:ml-0 lg:mt-12">
                    <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                      {step.name}
                    </h3>
                    <h4 className="mt-2 text-base text-gray-700">
                      {step.description}
                    </h4>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
}
