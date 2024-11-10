import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientSolutions } from "@/components/ClientSolutions";
import ContactForm from "@/components/ContactForm";
import Process from "@/components/Process";
import Choose from "@/components/Choose";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Creolepro | Haitian Creole Language Services – Human Translation",
  description:
    "Creolepro is a women-owned premier language service provider, specialized in the Haitian Creole language. Our mission is to bridge communication gaps and empower individuals, organizations and businesses to connect seamlessly across linguistic and cultural barriers.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientSolutions />
        <Process />
        <Choose />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
