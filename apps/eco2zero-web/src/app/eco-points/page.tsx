"use client";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { useLanguage } from "@/context/LanguageContext";

const groups = [
  { en: "Daily Actions", zh: "日常环保行为", items: { en: ["Bring a reusable cup", "Use reusable bags", "Walk or cycle", "Sort waste", "Save electricity", "Avoid single-use items"], zh: ["自带杯子", "使用环保袋", "步行或骑车", "垃圾分类", "节约用电", "减少一次性用品"] } },
  { en: "Community Actions", zh: "社区环保行为", items: { en: ["Join an event", "Community cleanup", "Tree planting", "Eco workshop", "Volunteer service"], zh: ["参加活动", "社区清洁", "植树活动", "环保讲座", "志愿服务"] } },
  { en: "Bonus Actions", zh: "额外奖励", items: { en: ["Invite a friend", "Share an event", "Keep an action streak"], zh: ["邀请朋友加入", "分享活动", "连续打卡"] } },
];

export default function EcoPointsPage() { const { lang } = useLanguage(); return <>
  <PageIntro eyebrow={lang === "en" ? "Future app core" : "未来 APP 核心入口"} title={lang === "en" ? "Eco Points" : "环保积分"} body={lang === "en" ? "Turn practical environmental choices into visible progress, points, and local rewards." : "把日常环保选择转化为清晰的进展、积分和本地奖励。"} />
  <section className="section"><div className="section-inner"><p className="eyebrow">{lang === "en" ? "How to earn" : "如何获得积分"}</p><div className="category-grid">{groups.map((group, i) => <article className="category" key={group.en}><span className="category-index">0{i + 1}</span><h2>{group[lang]}</h2><ul>{group.items[lang].map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
  <section className="section section-dark"><div className="section-inner"><p className="eyebrow eyebrow-light">{lang === "en" ? "Rewards marketplace" : "积分兑换中心"}</p><h2>{lang === "en" ? "Use points close to home" : "在本地使用环保积分"}</h2><div className="reward-list">{(lang === "en" ? ["Coffee coupons", "Fitness discounts", "Local business offers", "Community rewards"] : ["咖啡优惠券", "健身优惠", "本地商家优惠", "社区奖励"]).map((item) => <li key={item}>{item}<span>Coming soon</span></li>)}</div></div></section>
  <section className="cta"><h2>{lang === "en" ? "Make your next action count." : "让你的下一个行动更有价值。"}</h2><Link href="/app" className="button button-light">{lang === "en" ? "Try the demo app" : "体验演示应用"} →</Link></section>
  </>; }
