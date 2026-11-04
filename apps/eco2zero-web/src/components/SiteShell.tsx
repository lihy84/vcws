"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { copy, nav, pick } from "@vcws/content/eco2zero";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const active = (href: string) => href === "/" ? pathname === "/eco2zero" : pathname.includes(`/eco2zero${href}`);

  if (pathname.startsWith("/app")) return <main>{children}</main>;

  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <Link href="/" className="logo" onClick={() => setOpen(false)} aria-label="Eco2Zero home">
            <span className="logo-mark">e²0</span>
            <span><strong>Eco2Zero</strong><small>{pick(copy.pathToZero, lang)}</small></span>
          </Link>
          <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>Menu</button>
          <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
            {nav.filter((item) => item.key !== "contact").map((item) => (
              <Link key={item.href} href={item.href} className={active(item.href) ? "active" : undefined} onClick={() => setOpen(false)}>
                {pick(copy.nav[item.key], lang)}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <div className="language" aria-label="Language selector">
              <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
              <button className={lang === "zh" ? "active" : ""} onClick={() => setLang("zh")}>中</button>
            </div>
            <Link href="/app" className="button button-small">{lang === "en" ? "Launch demo" : "体验应用"}</Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="footer-grid">
          <div><div className="logo logo-light"><span className="logo-mark">e²0</span><span><strong>Eco2Zero</strong><small>{pick(copy.tagline, lang)}</small></span></div></div>
          <p>{lang === "en" ? "A community environmental initiative developed and operated by Victoria Cultural & Wellness Society." : "由维多利亚文化与健康协会发起和运营的社区环保项目。"}</p>
          <div className="footer-links"><Link href="/eco-points">Eco Points</Link><Link href="/schools">Schools</Link><Link href="/contact">Contact</Link></div>
        </div>
        <p className="copyright">© 2026 Eco2Zero · Practical climate action, powered by community.</p>
      </footer>
    </>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <LanguageProvider><Shell>{children}</Shell></LanguageProvider>;
}
