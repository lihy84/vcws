import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const quicksand = Quicksand({ variable: "--font-quicksand", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "Eco2Zero · Small Actions, Big Impact", template: "%s · Eco2Zero" },
  description: "Simple, measurable actions for a lower-waste, lower-carbon, more connected community.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={quicksand.variable}><body><SiteShell>{children}</SiteShell></body></html>;
}
