import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientSolutions } from "@/components/ClientSolutions";
import CareerContactForm from "@/components/CareerContactForm";
import Process from "@/components/Process";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CareerContactForm />
      </main>
      <Footer />
    </>
  );
}
