"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { copy, nav, t } from "@vcws/content/vcws";

export function Header() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <Link href="/" className="brand">
          <span className="brand__mark" aria-hidden>
            VCWS
          </span>
          <span className="brand__text">
            <span className="brand__name">{t(copy.brand, lang)}</span>
            <span className="brand__tag">{t(copy.tagline, lang)}</span>
          </span>
        </Link>

        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "is-active" : undefined}
                onClick={() => setOpen(false)}
              >
                {t(copy.nav[item.key], lang)}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === "en" ? "is-active" : undefined}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === "zh" ? "is-active" : undefined}
              onClick={() => setLang("zh")}
            >
              中
            </button>
          </div>
          <Link href="/contact" className="btn btn--small">
            {t(copy.cta.join, lang)}
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
