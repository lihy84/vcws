"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { copy, t } from "@vcws/content/vcws";

export default function PartnersPage() {
  const { lang } = useLanguage();

  return (
    <>
      <header className="page-hero">
        <p className="section__eyebrow">{t(copy.nav.partners, lang)}</p>
        <h1>{t(copy.partners.title, lang)}</h1>
        <p>{t(copy.partners.intro, lang)}</p>
      </header>

      <section className="section">
        {copy.partners.stories.map((story, index) => (
          <article
            key={t(story.title, "en")}
            className="partner-story"
            style={index % 2 === 1 ? { direction: "rtl" } : undefined}
          >
            <div style={{ direction: "ltr" }}>
              <Image
                src={story.image}
                alt={t(story.title, lang)}
                width={1200}
                height={800}
              />
            </div>
            <div style={{ direction: "ltr" }}>
              <h2
                style={{
                  marginTop: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color: "var(--sea-ink)",
                }}
              >
                {t(story.title, lang)}
              </h2>
              <p>{t(story.body, lang)}</p>
            </div>
          </article>
        ))}
        <Link href="/contact" className="btn">
          {t(copy.cta.join, lang)}
        </Link>
      </section>
    </>
  );
}
