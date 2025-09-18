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
  "ai architecture hub",
  "enterprise ai blueprint",
  "responsible ai governance",
  "ai transformation advisory",
  "ai architect assistant",
  "agentic automation playbook",
  "llm evaluation strategy",
  "ai influencer content engine",
  "ai program roadmap",
  "ai resource vault",
  "ai governance sprint"
];

const siteUrl = "https://saas-ai-architect-academy.vercel.app";

export const metadata: Metadata = {
  title: "AI Architect Academy",
  description:
    "Global AI architecture academy delivering adaptive curriculum, governed transformation, premium advisory, creator enablement, and an AI assistant for humans and companion agents.",
  keywords,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "AI Architect Academy",
    description:
      "Global AI architecture academy delivering adaptive curriculum, governed transformation, premium advisory, creator enablement, and an AI assistant for humans and companion agents.",
    url: siteUrl,
    siteName: "AI Architect Academy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Architect Academy",
    description:
      "Progressive curriculum, premium advisory, creator resources, and an AI Architect assistant for governed production AI.",
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
    "Global hub for governed AI architecture, premium advisory, creator enablement, and assistant-powered execution.",
  sameAs: [
    "https://github.com/AI-Architect-Academy/ai-architect-academy",
    "https://github.com/frankxai/saas-ai-architect-academy"
  ],
  knowsAbout: keywords,
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


