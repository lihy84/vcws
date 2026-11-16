import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Ideas, Meaningful Change",
  description:
    "Two interactive environmental forums at Mount Douglas Secondary School on November 6, 2026, hosted by Victoria Cultural & Wellness Society.",
  openGraph: {
    title: "Small Ideas, Meaningful Change",
    description:
      "A recap of two student environmental forums at Mount Douglas Secondary School.",
    images: ["/images/events/eco-poster.jpg"],
  },
};

export default function MountDouglasLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
