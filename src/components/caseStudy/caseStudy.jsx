import './caseStudy.css'

import React, { useEffect, useRef } from "react";

// ── Sample case study data — swap out with props or a router param ──
export const caseStudyData = {
  category: "Product Design",
  title: "Bloom Finance App",
  subtitle:
    "Redesigning the way everyday people understand and manage their money — from onboarding friction to a calm, confident financial dashboard.",
  readTime: "6 min read",
  publishedDate: "March 2024",
  updatedDate: "April 2026",
  heroImage:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85",
  heroCaption: "Final high-fidelity screens across iOS and Android.",
  authors: [
    {
      name: "Orman Clark",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
      href: "/about",
    },
  ],
  tags: ["UX Research", "UI Design", "Prototyping", "iOS · Android"],
  overview:
    "Bloom came to us with a clear brief: their app had a 68% drop-off during onboarding. Users opened it, hit a wall of jargon and form fields, and left. Our challenge was to build something that felt less like a bank and more like a trusted advisor.",
  sections: [
    {
      heading: "Discovery & Research",
      body: "We ran 14 user interviews across three demographic cohorts — recent graduates, mid-career switchers, and early retirees. The common thread wasn't income or literacy; it was anxiety. People didn't distrust money apps because they were complicated. They distrusted them because they felt judgmental.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      imageCaption: "Affinity mapping session from week-two research sprint.",
    },
    {
      heading: "Design Principles",
      body: "We settled on three principles that governed every decision: Calm over urgent — no red numbers, no alarming push notifications. Progress over perfection — celebrate small wins loudly. Context over data — never show a number without telling the user what to do with it.",
    },
    {
      heading: "Outcome",
      body: "After a 6-week beta with 2,400 users, onboarding completion climbed from 32% to 81%. Average session length doubled. The app launched publicly in March 2024 and reached 50k downloads in its first month.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      imageCaption: "Dashboard overview on iPhone 15 Pro.",
    },
  ],
  nextProject: {
    label: "Next Case Study",
    title: "Volta Electric",
    href: "/case-studies/volta-electric",
    image:
      "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?w=800&q=80",
  },
};

// ── Fade-in hook ──────────────────────────────────────────────────
function useFadeIn(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`;
          el.classList.add("cs-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

// ── Component ─────────────────────────────────────────────────────
const CaseStudy = ({ data = caseStudyData }) => {
  const categoryRef = useFadeIn(0);
  const titleRef = useFadeIn(0.1);
  const subtitleRef = useFadeIn(0.2);
  const metaRef = useFadeIn(0.3);
  const heroRef = useFadeIn(0.35);
  const overviewRef = useFadeIn(0);

  return (
    <article className="cs">
      <div id='aInner'>

      {/* ── Header ── */}
      <header className="cs__header">
        <span className="cs__category cs-fade" ref={categoryRef}>
          {data.category}
        </span>

        <h1 className="cs__title cs-fade" ref={titleRef}>
          {data.title}
        </h1>

        <p className="cs__subtitle cs-fade" ref={subtitleRef}>
          {data.subtitle}
        </p>

        {/* ── Meta row ── */}
        <div className="cs__meta cs-fade" ref={metaRef}>
          <div className="cs__authors">
            {data.authors.map((a) => (
              <a key={a.name} href={a.href} className="cs__author">
                <img src={a.avatar} alt={a.name} className="cs__avatar" />
                <span className="cs__author-name">By {a.name}</span>
              </a>
            ))}
          </div>

          <div className="cs__dates">
            <span>Published {data.publishedDate}</span>
            <span className="cs__dot" aria-hidden="true">·</span>
            <span>Updated {data.updatedDate}</span>
            <span className="cs__dot" aria-hidden="true">·</span>
            <span>{data.readTime}</span>
          </div>
        </div>

        {/* ── Tags ── */}
        <div className="cs__tags cs-fade" ref={useFadeIn(0.4)}>
          {data.tags.map((t) => (
            <span key={t} className="cs__tag">{t}</span>
          ))}
        </div>
      </header>

      {/* ── Hero image ── */}
      <div className="cs__hero cs-fade" ref={heroRef}>
        <img src={data.heroImage} alt={data.title} className="cs__hero-img" />
        {data.heroCaption && (
          <p className="cs__caption">{data.heroCaption}</p>
        )}
      </div>

      {/* ── Overview ── */}
      <div className="cs__body">
        <p className="cs__overview cs-fade" ref={overviewRef}>
          {data.overview}
        </p>

        <hr className="cs__divider" />

        {/* ── Sections ── */}
        {data.sections.map((sec, i) => (
          <section key={i} className="cs__section cs-fade" ref={useFadeIn(0)}>
            <h2 className="cs__section-heading">{sec.heading}</h2>
            <p className="cs__section-body">{sec.body}</p>

            {sec.image && (
              <figure className="cs__figure">
                <img
                  src={sec.image}
                  alt={sec.heading}
                  className="cs__figure-img"
                  loading="lazy"
                />
                {sec.imageCaption && (
                  <figcaption className="cs__caption">
                    {sec.imageCaption}
                  </figcaption>
                )}
              </figure>
            )}
          </section>
        ))}
      </div>
      </div>
    </article>
  );
}

export default CaseStudy