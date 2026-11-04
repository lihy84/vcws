"use client";
import Link from "next/link";
import { copy, pick } from "@vcws/content/eco2zero";
import { PageIntro } from "@/components/PageIntro";
import { useLanguage } from "@/context/LanguageContext";

export default function HowPage() { const { lang } = useLanguage(); return <>
  <PageIntro eyebrow="Choose · Track · Grow" title={lang === "en" ? "How It Works" : "如何参与"} body="Sustainable living becomes easier when the next step is specific, measurable, and shared." />
  <section className="section"><div className="section-inner"><div className="category-grid">{copy.actions.categories.map((category, i) => <article className="category" key={category.id}><span className="category-index">0{i+1}</span><h2>{pick(category.title, lang)}</h2><ul>{category.items[lang].map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
  <section className="section section-dark"><div className="section-inner split"><div><p className="eyebrow eyebrow-light">Keep the momentum</p><h2>Rewards & recognition</h2></div><ul className="reward-list">{copy.actions.rewards[lang].map((reward) => <li key={reward}>{reward}<span>↗</span></li>)}</ul></div></section>
  <section className="cta"><h2>Choose one action. Start today.</h2><Link href="/contact" className="button button-light">Join the movement →</Link></section>
  </>; }
