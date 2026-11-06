import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["300", "400", "500"] });

const title = `${profile.name} | ${profile.role}`;
const description = profile.seoDescription;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  keywords: ["Full Stack Developer", "MERN", "PERN", "React.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Hyderabad", "Pakistan", profile.name],
  authors: [{ name: profile.name }],
  openGraph: { title, description, type: "website", url: "/" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#03040a",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} antialiased`}>
      <head>
        {/* Site is already dark — tell the Dark Reader extension not to restyle it
            (its injected attributes otherwise cause React hydration mismatches). */}
        <meta name="darkreader-lock" />
        {/* If JS is off, never leave the intro curtain covering the page */}
        <noscript>
          <style>{`.preloader{display:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
