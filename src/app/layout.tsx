import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creolepro | Haitian Creole Language Services – Human Translation",
  description:
    "creolepro offers professional Haitian Creole translation services for businesses, organizations, and individuals. Our human translators provide accurate and culturally appropriate translations to help you communicate effectively with your Haitian Creole-speaking community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
