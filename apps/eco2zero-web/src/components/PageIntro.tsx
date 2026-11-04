export function PageIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <section className="page-intro"><div className="section-inner"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{body}</p></div></section>;
}
