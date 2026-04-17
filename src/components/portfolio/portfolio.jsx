import './portfolio.css'
import React, { useEffect, useRef } from "react";

// ── Sample data — replace with your own ─────────────────────────
export const portfolioItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    subtext: "Brand Identity · 2024",
    title: "Summit Outdoors",
    href: "/case-studies/summit-outdoors",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    subtext: "Product Design · 2024",
    title: "Bloom Finance App",
    href: "/case-studies/bloom-finance",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?w=800&q=80",
    subtext: "Web Design · 2023",
    title: "Volta Electric",
    href: "/case-studies/volta-electric",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=800&q=80",
    subtext: "UX Research · 2023",
    title: "Petal Health",
    href: "/case-studies/petal-health",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    subtext: "Campaign · 2023",
    title: "Nomad Travel Co.",
    href: "/case-studies/nomad-travel",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    subtext: "Brand Strategy · 2022",
    title: "Halcyon Workspace",
    href: "/case-studies/halcyon",
  },
];

// ── Card ─────────────────────────────────────────────────────────
const PortfolioCard = ({ item, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={item.href}
      className="portfolio-card"
      ref={cardRef}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
      aria-label={`View case study: ${item.title}`}
    >
      <div className="portfolio-card__image-wrap">
        <img
          src={item.image}
          alt={item.title}
          className="portfolio-card__image"
          loading="lazy"
        />
        <div className="portfolio-card__overlay" />
      </div>

     

      <h3 className="portfolio-card__title">{item.title}</h3>
      <span className="fadeT">Read more</span>
    </a>
  );
}

// ── Grid ─────────────────────────────────────────────────────────
const Portfolio = ({ items = portfolioItems }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolio" id='works'>
      <div className='pCont'>
       <h1>My works</h1>
    
      <div className="portfolio__grid">
        {items.map((item, i) => (
          <PortfolioCard key={item.id} item={item} index={i} />
        ))}
      </div>
      </div>
    </section>
  );
}

export default Portfolio