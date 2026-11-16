"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { copy, t } from "@vcws/content/vcws";

export function RecentEvents() {
  const { lang } = useLanguage();
  const gatherings = [
    {
      slug: copy.events.forum.slug,
      image: copy.events.forum.image,
      alt: t(copy.events.forum.imageAlt, lang),
      name: t(copy.events.forum.name, lang),
      headline: t(copy.events.forum.headline, lang),
      meta: t(copy.events.forum.meta, lang),
    },
    {
      slug: copy.events.recent[0].slug,
      image: copy.events.recent[0].image,
      alt: t(copy.events.recent[0].facilitator, lang),
      name: t(copy.events.recent[0].name, lang),
      headline: t(copy.events.recent[0].headline, lang),
      meta: t(copy.events.recent[0].meta, lang),
    },
  ];

  return (
    <div className="recent-grid">
      {gatherings.map((item) => (
        <Link key={item.slug} href={`/events/${item.slug}`} className="recent-card">
          <Image
            src={item.image}
            alt={item.alt}
            width={1200}
            height={900}
            className="recent-card__image"
          />
          <h3>{item.name}</h3>
          <p>{item.headline}</p>
          <p className="event-meta">{item.meta}</p>
          <span className="btn">{t(copy.cta.learnMore, lang)}</span>
        </Link>
      ))}
    </div>
  );
}
