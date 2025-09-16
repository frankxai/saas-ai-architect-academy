import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaaS AI Architect Academy",
  description:
    "Micro-learning platform and AI assistant for shipping enterprise-grade AI systems.",
  openGraph: {
    title: "SaaS AI Architect Academy",
    description:
      "Micro-learning platform and AI assistant for shipping enterprise-grade AI systems.",
    url: "https://saas-ai-architect-academy.vercel.app",
    siteName: "SaaS AI Architect Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS AI Architect Academy",
    description:
      "Progressive curriculum, micro-learning modules, and an AI Architect assistant.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={${geistSans.variable}  antialiased}>
        {children}
      </body>
    </html>
  );
}
