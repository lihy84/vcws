"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { copy, t } from "@vcws/content/vcws";

export default function ContactPage() {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <header className="page-hero">
        <p className="section__eyebrow">{t(copy.nav.contact, lang)}</p>
        <h1>{t(copy.contact.title, lang)}</h1>
        <p>{t(copy.contact.intro, lang)}</p>
      </header>

      <section className="section">
        <div className="contact-grid">
          <div>
            <div className="split__media" style={{ marginBottom: "1.5rem" }}>
              <Image
                src="/images/image4.jpg"
                alt={t(copy.contact.title, lang)}
                width={1200}
                height={900}
              />
            </div>
            <p style={{ color: "var(--sea-deep)", fontWeight: 600 }}>
              {t(copy.brand, lang)}
            </p>
            <p>{t(copy.contact.location, lang)}</p>
            <p>{t(copy.englishTagline, lang)}</p>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              {t(copy.contact.formName, lang)}
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              {t(copy.contact.formEmail, lang)}
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              {t(copy.contact.formMessage, lang)}
              <textarea name="message" required />
            </label>
            <button type="submit" className="btn">
              {t(copy.contact.formSubmit, lang)}
            </button>
            <p className="form-note">
              {sent
                ? lang === "zh"
                  ? "谢谢！留言已在浏览器端记录（演示）。"
                  : "Thanks! Message captured in-browser for this demo."
                : t(copy.contact.formNote, lang)}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
