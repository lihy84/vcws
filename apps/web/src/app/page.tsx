"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { copy, t } from "@vcws/content/vcws";

export default function HomePage() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/images/image1.jpg"
            alt={t(copy.focuses[0].title, lang)}
            fill
            priority
            sizes="100vw"
          />
          <div className="hero__shade" />
        </div>
        <div className="hero__content">
          <p className="hero__label">{t(copy.home.visionLabel, lang)}</p>
          <h1>{t(copy.brand, lang)}</h1>
          <p className="hero__lead">{t(copy.tagline, lang)}</p>
          <div className="hero__actions">
            <Link href="/projects" className="btn">
              {t(copy.cta.explore, lang)}
            </Link>
            <Link href="/volunteers" className="btn btn--ghost">
              {t(copy.cta.volunteer, lang)}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="split">
          <div>
            <div className="section__head">
              <p className="section__eyebrow">{t(copy.home.visionLabel, lang)}</p>
              <h2>{t(copy.home.vision, lang)}</h2>
            </div>
            <p>{t(copy.home.intro, lang)}</p>
            <p>{t(copy.home.intro2, lang)}</p>
            <div className="hero__actions">
              <Link href="/about" className="btn">
                {t(copy.cta.learnMore, lang)}
              </Link>
            </div>
          </div>
          <div className="split__media">
            <Image
              src="/images/image5.jpg"
              alt={t(copy.focuses[0].title, lang)}
              width={1200}
              height={900}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <p className="section__eyebrow">VCWS</p>
          <h2>{t(copy.home.focusTitle, lang)}</h2>
        </div>
        <div className="focus-grid">
          {copy.focuses.map((focus) => (
            <article key={focus.id} className="focus-card">
              <Image
                src={focus.image}
                alt={t(focus.title, lang)}
                width={900}
                height={600}
              />
              <div className="focus-card__body">
                <h3>{t(focus.title, lang)}</h3>
                <p>{t(focus.body, lang)}</p>
                <ul>
                  {focus.items[lang].slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <p className="section__eyebrow">{t(copy.nav.projects, lang)}</p>
          <h2>{t(copy.projects.title, lang)}</h2>
          <p>{t(copy.projects.intro, lang)}</p>
        </div>
        <div className="project-grid">
          {copy.projects.items.map((project) => (
            <Link
              key={project.slug}
              href={`/projects#${project.slug}`}
              className="project-card"
            >
              <Image
                src={project.image}
                alt={t(project.title, lang)}
                width={800}
                height={500}
              />
              <div className="project-card__body">
                <p className="section__eyebrow">{t(project.subtitle, lang)}</p>
                <h3>{t(project.title, lang)}</h3>
                <p>{t(project.body, lang)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="story-band">
        <div className="story-band__inner">
          <h2>{t(copy.home.storyTitle, lang)}</h2>
          <p>{t(copy.home.storyBody, lang)}</p>
          <p>{t(copy.englishTagline, lang)}</p>
          <div>
            <Link href="/contact" className="btn">
              {t(copy.cta.join, lang)}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="split split--reverse">
          <div className="split__media">
            <Image
              src="/images/image2.jpg"
              alt={t(copy.focuses[2].title, lang)}
              width={1200}
              height={800}
            />
          </div>
          <div>
            <div className="section__head">
              <p className="section__eyebrow">{t(copy.home.inviteTitle, lang)}</p>
              <h2>{t(copy.home.inviteBody, lang)}</h2>
            </div>
            <Link href="/events" className="btn btn--ghost">
              {t(copy.nav.events, lang)}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
