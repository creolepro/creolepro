"use client";

import { Fragment, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import Typewriter from "typewriter-effect";
import { getCalApi } from "@calcom/embed-react";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#1C66F9" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Container className="pb-20 pt-48 my-20 text-center">
      <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl min-h-[180px]">
        Professional{" "}
        <span className="relative whitespace-nowrap">
          <span className="relative text-haiti-blue">Haitian Creole</span>
        </span>{" "}
        Translations For Your{" "}
        <Typewriter
          options={{
            strings: [
              "Business",
              "Website",
              "Marketing Materials",
              "Technical Documents",
              "Medical Documents",
              "Legal Documents",
              "School Materials",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Our team of native and expert matter translators are fluent in Haitian
        Creole and English and can help you communicate your message accurately
        and effectively.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button
          href="/register"
          color="blue"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact-form");
          }}
        >
          Get a free quote
        </Button>
        <Button variant="outline">
          <button
            data-cal-namespace=""
            data-cal-link="creolepro/30min"
            data-cal-config='{"layout":"month_view"}'
          >
            Talk to an expert
          </button>
        </Button>
      </div>
    </Container>
  );
}
