import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientSolutions } from "@/components/ClientSolutions";
import ContactForm from "@/components/ContactForm";
import Process from "@/components/Process";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Creolepro | Haitian Creole Language Services – Human Translation
        </title>
      </Head>
      <Header />
      <main>
        <Hero />
        <ClientSolutions />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
