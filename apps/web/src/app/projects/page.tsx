"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { copy, t } from "@vcws/content/vcws";

export default function ProjectsPage() {
  const { lang } = useLanguage();

  return (
    <>
      <header className="page-hero">
        <p className="section__eyebrow">Hub</p>
        <h1>{t(copy.projects.title, lang)}</h1>
        <p>{t(copy.projects.intro, lang)}</p>
      </header>

      <section className="section">
        <div className="project-grid">
          {copy.projects.items.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className="project-card"
            >
              <Image
                src={project.image}
                alt={t(project.title, lang)}
                width={900}
                height={600}
              />
              <div className="project-card__body">
                <p className="section__eyebrow">{t(project.subtitle, lang)}</p>
                <h3>{t(project.title, lang)}</h3>
                <p>{t(project.body, lang)}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="hero__actions" style={{ marginTop: "2rem" }}>
          <Link href="/events" className="btn">
            {t(copy.nav.events, lang)}
          </Link>
          <Link href="/contact" className="btn btn--ghost">
            {t(copy.cta.join, lang)}
          </Link>
        </div>
      </section>
    </>
  );
}
