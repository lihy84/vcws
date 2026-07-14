"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { copy, t } from "@vcws/content/vcws";

export default function VolunteersPage() {
  const { lang } = useLanguage();

  return (
    <>
      <header className="page-hero">
        <p className="section__eyebrow">{t(copy.nav.volunteers, lang)}</p>
        <h1>{t(copy.volunteers.title, lang)}</h1>
        <p>{t(copy.volunteers.intro, lang)}</p>
      </header>

      <section className="section">
        <div className="split">
          <div className="split__media">
            <Image
              src="/images/image5.jpg"
              alt={t(copy.volunteers.title, lang)}
              width={1200}
              height={900}
            />
          </div>
          <div>
            <p>{t(copy.focuses[3].body, lang)}</p>
            <p>{t(copy.volunteers.invite, lang)}</p>
            <h3 style={{ fontFamily: "var(--font-display)", color: "var(--sea-ink)" }}>
              {t(copy.volunteers.rolesTitle, lang)}
            </h3>
            <ul className="checklist">
              {copy.volunteers.roles[lang].map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
            <div className="hero__actions">
              <Link href="/contact" className="btn">
                {t(copy.cta.volunteer, lang)}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
