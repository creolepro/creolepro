"use client";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/hooks/use-language";
import { footerTranslations } from "@/translations";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export function Footer() {
  const { language } = useLanguage();
  const t = footerTranslations[language];

  return (
    <footer>
      <Container>
        <div className="py-16 flex flex-col items-center space-y-12 text-center">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 gap-x-6">
              <NavLink href="#features">{t.clientSolutions}</NavLink>
              <NavLink href="#process">{t.process}</NavLink>
              {language === "en" && (
                <NavLink href="#choose">{t.whyChooseUs}</NavLink>
              )}
              <NavLink href="#pricing">{t.careers}</NavLink>
            </div>
          </nav>
          <dl className="space-y-4 text-base text-gray-600">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">{t.address}</span>
                <BuildingOffice2Icon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                {t.addressLine1}
                <br />
                {t.addressLine2}
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">{t.telephone}</span>
                <PhoneIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a className="hover:text-gray-900" href="tel:+18007771123">
                  {t.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">{t.email}</span>
                <EnvelopeIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a
                  className="hover:text-gray-900"
                  href="mailto:contact@creolepro.com"
                >
                  {t.emailAddress}
                </a>
              </dd>
            </div>
          </dl>
          <div className="w-full border-t border-slate-400/10 py-10 flex justify-center">
            <div className="text-center">
              <p className="mt-6 text-sm text-slate-500">
                {t.copyright.replace(
                  "{year}",
                  new Date().getFullYear().toString()
                )}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
