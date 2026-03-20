import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "neutralizing.ai — Premium AI Domain For Sale",
  description:
    "neutralizing.ai is a premium, brandable domain for AI safety, cyber defense, fraud detection, threat neutralization, and enterprise AI guardrails. Available now.",
  keywords: [
    "AI domain",
    "premium domain",
    "AI safety",
    "cyber defense",
    "threat neutralization",
    "domain for sale",
    "neutralizing.ai",
  ],
  openGraph: {
    title: "neutralizing.ai — Premium AI Domain For Sale",
    description:
      "A powerful, brandable domain for the next generation of AI defense, safety, and security platforms.",
    type: "website",
    url: "https://neutralizing.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "neutralizing.ai — Premium AI Domain For Sale",
    description:
      "A powerful, brandable domain for the next generation of AI defense, safety, and security platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#050510]">
        {children}
      </body>
    </html>
  );
}
