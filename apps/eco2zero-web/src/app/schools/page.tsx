"use client";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { useLanguage } from "@/context/LanguageContext";

export default function SchoolsPage() { const { lang } = useLanguage(); const programs = lang === "en" ? ["Campus Eco Challenge", "Student Ambassador Program", "School Partnership Program", "Youth Leadership Program"] : ["校园环保挑战", "学生环保大使计划", "学校合作伙伴计划", "青年环保领导力项目"]; return <>
  <PageIntro eyebrow={lang === "en" ? "Learning through action" : "在行动中学习"} title={lang === "en" ? "Schools" : "学校合作"} body={lang === "en" ? "Programs that help students build environmental knowledge, leadership, and measurable habits together." : "帮助学生共同培养环保知识、领导力和可衡量习惯的校园项目。"} />
  <section className="section"><div className="section-inner category-grid">{programs.map((program, i) => <article className="category" key={program}><span className="category-index">0{i + 1}</span><h2>{program}</h2><p>{i === 3 ? (lang === "en" ? "Reserved for a future program phase." : "为未来项目阶段预留。") : (lang === "en" ? "A practical pathway for students and educators to lead sustainable change on campus." : "让学生和教育工作者在校园中推动可持续改变的实践路径。")}</p></article>)}</div></section>
  <section className="cta"><h2>{lang === "en" ? "Bring Eco2Zero to your school." : "把 Eco2Zero 带进你的学校。"}</h2><Link href="/contact" className="button button-light">{lang === "en" ? "Start a partnership" : "开始学校合作"} →</Link></section>
  </>; }
