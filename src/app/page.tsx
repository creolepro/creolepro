import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientSolutions } from "@/components/ClientSolutions";
import ContactForm from "@/components/ContactForm";
import Process from "@/components/Process";

export default function Home() {
  return (
    <>
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
