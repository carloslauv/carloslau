import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carlos Lau — YC Founder · Ex-Uber · Product × AI",
  description:
    "I build AI products end-to-end — from RAG pipelines to enterprise contracts. YC S21 founder, ex-Uber pre-IPO, $1M ARR.",
  openGraph: {
    title: "Carlos Lau — YC Founder · Ex-Uber · Product × AI",
    description:
      "I build AI products end-to-end — from RAG pipelines to enterprise contracts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
