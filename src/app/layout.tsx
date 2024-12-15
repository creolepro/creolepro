import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/hooks/use-language";

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
  ],
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
        </LanguageProvider>
      </body>
    </html>
  );
}
