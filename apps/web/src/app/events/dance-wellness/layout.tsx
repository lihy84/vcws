import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dance & Wellness",
  description:
    "A Dance & Wellness gathering at Fernwood Neighbourhood House on October 13, 2026, hosted by Victoria Cultural & Wellness Society.",
  openGraph: {
    title: "Dance & Wellness",
    description: "A recap of the October Dance & Wellness gathering in Fernwood.",
    images: ["/images/events/dance-lead.jpg"],
  },
};

export default function DanceWellnessLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
