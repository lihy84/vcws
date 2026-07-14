"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { copy, t } from "@vcws/content/vcws";

export default function ResourcesPage() {
  const { lang } = useLanguage();

  return (
    <>
      <header className="page-hero">
        <p className="section__eyebrow">{t(copy.nav.resources, lang)}</p>
        <h1>{t(copy.resources.title, lang)}</h1>
        <p>{t(copy.resources.intro, lang)}</p>
      </header>

      <section className="section">
        <div className="card-grid">
          {copy.resources.items.map((item) => (
            <Link key={item.href} href={item.href} className="info-card">
              <h3>{t(item.title, lang)}</h3>
              <p>{t(item.body, lang)}</p>
              <p className="section__eyebrow" style={{ marginTop: "1rem" }}>
                {t(copy.cta.learnMore, lang)} →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
