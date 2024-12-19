"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import Typewriter from "typewriter-effect";
import { useLanguage } from "@/hooks/use-language";
import { heroTranslations } from "@/translations";
import Link from "next/link";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const t = heroTranslations[language];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container className="pb-20 pt-20 md:pt-48 my-20 text-center">
      <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl min-h-[180px]">
        <div className={language === "ht" ? "mb-2" : ""}>
          {language === "en" ? (
            <span>
              {t.title.prefix}{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative text-haiti-blue">
                  {t.title.highlight}
                </span>
              </span>
            </span>
          ) : (
            t.title.prefix
          )}
        </div>{" "}
        {language === "ht" && (
          <span className="relative whitespace-nowrap">
            <span className="relative text-haiti-blue">
              {t.title.highlight}
            </span>
          </span>
        )}{" "}
        {t.title.suffix}
        <div className={language === "ht" ? "mt-2" : ""}>
          <Typewriter
            options={{
              strings: t.typewriter,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        {t.description}
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button
          href="#register"
          color="blue"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact-form");
          }}
        >
          {t.cta.quote}
        </Button>
        <Link
          href="https://cal.com/creolepro/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-slate-100 text-slate-900 hover:bg-slate-200"
        >
          {t.cta.expert}
        </Link>
      </div>
    </Container>
  );
}
