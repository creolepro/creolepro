"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import { useLanguage } from "@/hooks/use-language";
import { chooseTranslations } from "@/translations";

export default function Choose() {
  const { language } = useLanguage();
  const t = chooseTranslations[language];

  return (
    <section id="choose">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                {t.subtitle}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t.title}
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {t.description}
              </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
              {t.features.map(
                (feature: { name: string; description: string }) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="font-semibold text-gray-900">
                      <CheckIcon
                        className="absolute left-0 top-1 h-5 w-5 text-blue-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-2">{feature.description}</dd>
                  </div>
                )
              )}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
