"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { copy, nav, t } from "@vcws/content/vcws";

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{t(copy.brand, lang)}</p>
          <p className="site-footer__tag">{t(copy.tagline, lang)}</p>
          <p className="site-footer__en">{t(copy.englishTagline, lang)}</p>
        </div>
        <div className="site-footer__links">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {t(copy.nav[item.key], lang)}
            </Link>
          ))}
        </div>
      </div>
      <p className="site-footer__rights">{t(copy.footer.rights, lang)}</p>
    </footer>
  );
}
