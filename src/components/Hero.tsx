import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
        Professional{" "}
        <span className="relative whitespace-nowrap">
          <span className="relative text-haiti-blue">Haitian Creole</span>
        </span>{" "}
        Translations For Your Business
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Our team of native and expert matter translators are fluent in Haitian
        Creole and English and can help you communicate your message accurately
        and effectively.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register">Get in touch</Button>
        <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <span className="ml-3">Free quote</span>
        </Button>
      </div>
    </Container>
  );
}
