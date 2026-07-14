"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { copy, t } from "@vcws/content/vcws";

export default function EventsPage() {
  const { lang } = useLanguage();
  const featured = copy.events.featured;

  return (
    <>
      <header className="page-hero">
        <p className="section__eyebrow">{t(copy.nav.events, lang)}</p>
        <h1>{t(copy.events.title, lang)}</h1>
        <p>{t(copy.events.intro, lang)}</p>
      </header>

      <section className="section">
        <div className="split">
          <div>
            <p className="section__eyebrow">{t(featured.meta, lang)}</p>
            <h2>{t(featured.name, lang)}</h2>
            <p style={{ fontSize: "1.15rem", color: "var(--sea-deep)" }}>
              {t(featured.subtitle, lang)}
            </p>
            <h3 style={{ marginTop: "2rem" }}>{t(copy.events.principlesTitle, lang)}</h3>
            <ul className="checklist">
              {copy.events.principles[lang].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="split__media">
            <Image
              src="/images/image6.jpg"
              alt={t(featured.name, lang)}
              width={1200}
              height={900}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>{t(featured.flowTitle, lang)}</h2>
        </div>
        <div className="timeline">
          {featured.parts.map((part, index) => (
            <article key={t(part.title, "en")} className="timeline__item">
              <p className="timeline__meta">
                {String(index + 1).padStart(2, "0")} · {t(part.time, lang)}
              </p>
              <h3 style={{ margin: 0, fontFamily: "var(--font-display)" }}>
                {t(part.title, lang)}
              </h3>
              <p style={{ margin: 0 }}>{t(part.body, lang)}</p>
            </article>
          ))}
        </div>
        <div className="hero__actions" style={{ marginTop: "2rem" }}>
          <Link href="/projects#eco-action" className="btn">
            Eco2Zero
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            {t(copy.cta.join, lang)}
          </Link>
        </div>
      </section>
    </>
  );
}
