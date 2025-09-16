import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const keywords = [
  "ai architect academy",
  "ai architecture patterns",
  "enterprise rag blueprint",
  "ai governance checklist",
  "model risk management",
  "llm evaluation strategy",
  "ai assistant for architects",
  "agentic workflow playbook",
  "ai center of excellence toolkit",
  "ai program roadmap"
];

const siteUrl = "https://saas-ai-architect-academy.vercel.app";

export const metadata: Metadata = {
  title: "AI Architect Academy Platform",
  description:
    "Micro-learning platform and AI assistant for shipping enterprise-grade AI systems with governance and measurable impact.",
  keywords,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "AI Architect Academy Platform",
    description:
      "Micro-learning platform and AI assistant for shipping enterprise-grade AI systems with governance and measurable impact.",
    url: siteUrl,
    siteName: "AI Architect Academy Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Architect Academy Platform",
    description:
      "Progressive curriculum, micro-learning modules, and an AI Architect assistant for governed production AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "AI Architect Academy",
  url: siteUrl,
  description:
    "Micro-learning platform, patterns, and governance assets that help AI Architects deliver production AI systems.",
  sameAs: [
    "https://github.com/AI-Architect-Academy/ai-architect-academy",
    "https://github.com/frankxai/saas-ai-architect-academy"
  ],
  providesCourse: keywords.map((keyword) => ({
    "@type": "Course",
    name: keyword,
    provider: { "@type": "Organization", name: "AI Architect Academy" },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(organizationJsonLd)}
        </Script>
        {children}
      </body>
    </html>
  );
}
