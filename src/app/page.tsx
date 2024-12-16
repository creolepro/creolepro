"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientSolutions } from "@/components/ClientSolutions";
import ContactForm from "@/components/ContactForm";
import Process from "@/components/Process";
import Choose from "@/components/Choose";
import { useLanguage } from "@/hooks/use-language";
import { Metadata } from "next/types";

// Note: metadata needs to be in a separate file when using 'use client'
export default function Home() {
  const { language } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientSolutions />
        <Process />
        {language === "en" && <Choose />}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
