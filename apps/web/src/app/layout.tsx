import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vcws.vercel.app"),
  title: {
    default: "Victoria Cultural & Wellness Society",
    template: "%s · VCWS",
  },
  description:
    "维多利亚文化与健康协会 — connecting kindness, culture, wellness, and community action in Greater Victoria.",
  openGraph: {
    title: "Victoria Cultural & Wellness Society",
    description:
      "A community innovation platform connecting culture, wellness, and sustainable action in Victoria, BC.",
    images: ["/images/image1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
