"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { copy, t } from "@vcws/content/vcws";

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <>
      <header className="page-hero">
        <p className="section__eyebrow">VCWS</p>
        <h1>{t(copy.about.title, lang)}</h1>
        <p>{t(copy.home.intro, lang)}</p>
      </header>

      <section className="section">
        <div className="split">
          <div>
            <div className="section__head">
              <h2>{t(copy.about.whyTitle, lang)}</h2>
            </div>
            <p>{t(copy.about.whyP1, lang)}</p>
            <p>{t(copy.about.whyP2, lang)}</p>
            <h3 style={{ fontFamily: "var(--font-display)", color: "var(--sea-ink)" }}>
              {t(copy.about.bridgeTitle, lang)}
            </h3>
            <ul className="checklist">
              {copy.about.bridgeItems[lang].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{t(copy.about.bridgeClose, lang)}</p>
          </div>
          <div className="split__media">
            <Image
              src="/images/image8.jpg"
              alt={t(copy.about.title, lang)}
              width={1200}
              height={900}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <p className="section__eyebrow">Impact</p>
          <h2>{t(copy.about.sustainTitle, lang)}</h2>
          <p>{t(copy.about.sustainIntro, lang)}</p>
        </div>
        <div className="card-grid">
          {copy.about.pillars.map((pillar) => (
            <article key={t(pillar.title, "en")} className="info-card">
              <h3>{t(pillar.title, lang)}</h3>
              <p>{t(pillar.body, lang)}</p>
            </article>
          ))}
        </div>
        <div className="hero__actions" style={{ marginTop: "2rem" }}>
          <Link href="/volunteers" className="btn">
            {t(copy.cta.volunteer, lang)}
          </Link>
          <Link href="/partners" className="btn btn--ghost">
            {t(copy.nav.partners, lang)}
          </Link>
        </div>
      </section>
    </>
  );
}
