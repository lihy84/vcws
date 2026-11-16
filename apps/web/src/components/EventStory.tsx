"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { copy, t, type Lang } from "@vcws/content/vcws";

type Text = { zh: string; en: string };

export type EventStoryContent = {
  name: Text;
  headline: Text;
  subtitle: Text;
  meta: Text;
  image: string;
  imageAlt?: Text;
  facilitator?: Text;
  quote: Text;
  lead: readonly Text[];
  sections: readonly { title: Text; body: Text }[];
  closing?: readonly Text[];
  gallery: readonly { src: string; alt: Text }[];
};

function label(text: Text | undefined, fallback: Text, lang: Lang) {
  return t(text ?? fallback, lang);
}

export function EventStory({ event }: { event: EventStoryContent }) {
  const { lang } = useLanguage();

  return (
    <>
      <header className="page-hero">
        <p className="section__eyebrow">
          <Link href="/events">{t(copy.nav.events, lang)}</Link>
        </p>
        <h1>{t(event.name, lang)}</h1>
        <p>{t(event.headline, lang)}</p>
      </header>

      <article className="event-story">
        <section className="section" style={{ paddingBottom: "1.5rem" }}>
          <div className="split">
            <div>
              <p style={{ fontSize: "1.15rem", color: "var(--sea-deep)" }}>
                {t(event.subtitle, lang)}
              </p>
              <p className="event-meta">{t(event.meta, lang)}</p>
              {event.facilitator ? (
                <p className="event-meta">{t(event.facilitator, lang)}</p>
              ) : null}
              <blockquote className="event-quote">{t(event.quote, lang)}</blockquote>
            </div>
            <div className="split__media">
              <Image
                src={event.image}
                alt={label(event.imageAlt, event.facilitator ?? event.name, lang)}
                width={1600}
                height={1200}
                className="event-cover"
                priority
                style={{
                  width: "100%",
                  height: "32rem",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="event-prose">
            {event.lead.map((paragraph) => (
              <p key={t(paragraph, "en")}>{t(paragraph, lang)}</p>
            ))}
          </div>
          <div className="timeline" style={{ marginTop: "2rem" }}>
            {event.sections.map((section, index) => (
              <article key={t(section.title, "en")} className="timeline__item">
                <p className="timeline__meta">{String(index + 1).padStart(2, "0")}</p>
                <h2
                  style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "1.6rem" }}
                >
                  {t(section.title, lang)}
                </h2>
                <p style={{ margin: 0 }}>{t(section.body, lang)}</p>
              </article>
            ))}
          </div>
          {event.closing ? (
            <div className="event-prose" style={{ marginTop: "2rem" }}>
              {event.closing.map((paragraph) => (
                <p key={t(paragraph, "en")}>
                  <strong>{t(paragraph, lang)}</strong>
                </p>
              ))}
            </div>
          ) : null}
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section__head">
            <h2>{t(copy.events.galleryTitle, lang)}</h2>
          </div>
          <div className="photo-grid">
            {event.gallery.map((photo) => (
              <figure key={photo.src}>
                <Image src={photo.src} alt={t(photo.alt, lang)} width={1200} height={900} />
              </figure>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
