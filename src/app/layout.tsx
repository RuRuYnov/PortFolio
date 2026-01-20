import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";  // <--- C'EST CETTE LIGNE QUI EST SOUVENT MANQUANTE

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Ruben DURIEZ",
  description: "Admin Sys & Réseaux Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}