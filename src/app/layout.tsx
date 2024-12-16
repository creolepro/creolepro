import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/hooks/use-language";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Creolepro | Haitian Creole Language Services – Human Translation",
  description:
    "Creolepro offers professional Haitian Creole translation services for businesses, organizations, and individuals. Our human translators provide accurate and culturally appropriate translations to help you communicate effectively with your Haitian Creole-speaking community.",
  keywords: [
    "Haitian Creole translation",
    "Creole translation services",
    "professional translation",
    "document translation",
    "website localization",
    "Haitian translation company",
    "certified Creole translators",
    "business translation services",
    "medical translation Haitian Creole",
    "legal translation services",
    "Haiti language services",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://creolepro.com/",
    title: "Creolepro | Professional Haitian Creole Translation Services",
    description:
      "Professional Haitian Creole translation services for businesses and organizations. Expert human translators, cultural accuracy, and reliable service.",
    siteName: "CreolePro",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen bg-white font-sans">
        <LanguageProvider>
          <main className="relative">{children}</main>
          <Toaster position="top-center" richColors />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
