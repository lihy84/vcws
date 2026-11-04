"use client";

import Link from "next/link";
import { copy, pick } from "@vcws/content/eco2zero";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { lang } = useLanguage();
  return <>
    <section className="hero">
      <div className="hero-art" aria-hidden="true"><span /></div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow eyebrow-light">{pick(copy.pathToZero, lang)}</p>
        <h1>{pick(copy.home.heroHeadline, lang)}</h1>
        <p>{pick(copy.home.heroSub, lang)}</p>
        <div className="hero-actions"><Link href="/app" className="button">{lang === "en" ? "Try the Demo" : "体验应用"}</Link><Link href="/eco-points" className="hero-link">{lang === "en" ? "Explore Eco Points" : "了解环保积分"} <span>→</span></Link><Link href="/partners" className="hero-link">{lang === "en" ? "Partner with us" : "成为合作伙伴"} <span>→</span></Link></div>
      </div>
    </section>

    <section className="section section-mission"><div className="section-inner split">
      <div><p className="eyebrow">Our mission</p><h2>{pick(copy.home.missionTitle, lang)}</h2></div>
      <div><p className="lede">{pick(copy.home.missionBody, lang)}</p><Link href="/about" className="text-link">Our story <span>→</span></Link></div>
    </div></section>

    <section className="section section-tint"><div className="section-inner"><p className="eyebrow">{lang === "en" ? "Four simple steps" : "四个简单步骤"}</p><h2>{pick(copy.home.stepsTitle, lang)}</h2><div className="step-grid">
      {copy.home.steps.map((step, index) => <article className="step-card" key={step.title.en}><span className="step-number">0{index + 1}</span><h3>{pick(step.title, lang)}</h3><p>{pick(step.body, lang)}</p></article>)}
    </div><Link href="/eco-points" className="button button-dark">{lang === "en" ? "Explore Eco Points" : "了解环保积分"}</Link></div></section>

    <section className="section"><div className="section-inner dashboard-grid"><div><p className="eyebrow">Visible progress</p><h2>{pick(copy.home.impactPreview.title, lang)}</h2><p className="lede">Every logged action becomes part of a clear community picture—momentum you can see, share, and grow.</p><Link href="/impact" className="text-link">View community impact <span>→</span></Link></div><div className="mini-chart" aria-label="Monthly impact growth chart"><div style={{height:"35%"}}><span>Jan</span></div><div style={{height:"56%"}}><span>Feb</span></div><div style={{height:"78%"}}><span>Mar</span></div><div style={{height:"94%"}}><span>Apr</span></div></div></div></section>

    <section className="story"><div className="story-pattern" aria-hidden="true"><span>01</span><span>02</span><span>03</span><span>04</span></div><div className="story-content"><blockquote>“{pick(copy.home.storyQuote, lang)}”</blockquote><p>{pick(copy.home.storyAttribution, lang)}</p></div></section>
    <section className="cta"><div><p className="eyebrow eyebrow-light">Start where you are</p><h2>{pick(copy.home.ctaTitle, lang)}</h2></div><Link href="/contact" className="button button-light">{pick(copy.home.ctaButton, lang)} →</Link></section>
  </>;
}
