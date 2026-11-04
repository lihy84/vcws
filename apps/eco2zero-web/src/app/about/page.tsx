"use client";
import { copy, pick } from "@vcws/content/eco2zero";
import { PageIntro } from "@/components/PageIntro";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() { const { lang } = useLanguage(); return <>
  <PageIntro eyebrow="Our purpose" title={pick(copy.about.title, lang)} body={pick(copy.about.storyLead, lang)} />
  <section className="section"><div className="section-inner prose-grid"><h2>{pick(copy.about.storyTitle, lang)}</h2><div><p>Eco2Zero bridges the gap between environmental awareness and meaningful action. Sustainable living should feel practical, local, and available to everyone.</p><p>From bringing a reusable cup to joining a neighbourhood cleanup, every person has the power to make a difference. Together, those choices create lasting impact.</p></div></div></section>
  <section className="section section-tint"><div className="section-inner two-up"><article><p className="eyebrow">Mission</p><h2>{pick(copy.about.mission, lang)}</h2></article><article><p className="eyebrow">Vision</p><h2>{pick(copy.about.vision, lang)}</h2></article></div></section>
  <section className="section"><div className="section-inner"><p className="eyebrow">What guides us</p><h2>Our values</h2><div className="value-grid">{copy.about.values.map((value, i) => <article key={value.title.en}><span>0{i+1}</span><h3>{pick(value.title, lang)}</h3><p>{pick(value.body, lang)}</p></article>)}</div></div></section>
  </>; }
