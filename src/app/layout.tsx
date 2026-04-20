import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mohammed Salman - Portfolio",
  description:
    "Explore the portfolio of Mohammed Salman, a Professional Full Stack Developer specializing in Next.js, AI Automation, and modern web solutions. Built for performance and user experience.",
  keywords: [
    "Mohammed Salman",
    "Full Stack Developer",
    "Next.js Portfolio",
    "AI Automation",
    "Software Engineer",
    "React Developer",
  ],
  authors: [{ name: "Mohammed Salman" }],
  openGraph: {
    title: "Mohammed Salman | Personal Portfolio",
    description:
      "Full Stack Developer & AI Automation Expert — Building the future of the web.",
    siteName: "Mohammed Salman Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Salman Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Salman | Full Stack Developer",
    description: "Building modern web applications and AI automations.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
