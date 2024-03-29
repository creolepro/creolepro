"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import Typewriter from "typewriter-effect";

export function Hero() {
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
        <Button href="/register" color="blue">
          Get a free quote
        </Button>
        <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <span className="ml-3">Talk to an expert</span>
        </Button>
      </div>
    </Container>
  );
}
