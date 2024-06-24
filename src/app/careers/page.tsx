import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import CareerContactForm from "@/components/CareerContactForm";

export default function Home() {
  return (
    <>
      <Header isMainPage={false} />
      <main>
        <CareerContactForm />
      </main>
      <Footer />
    </>
  );
}
