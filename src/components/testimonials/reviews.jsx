import './reviews.css'
import React, { useEffect, useRef } from "react";

// ── Data ──────────────────────────────────────────────────────────
const testimonials = [
  {
    id: 1,
    name: "Alex Danilowicz",
    company: "Magic Patterns",
    avatar: "https://i.pravatar.cc/80?img=11",
    quote: [
      "We've been using Async daily to get a better sense of what's truly happening with our product.",
      "Async captures our support chats so every morning we read the summary and without it would feel like we're flying blind. At our volume of support, it'd be impossible to know what's happening on the ground level without a tool like Async.",
    ],
  },
  {
    id: 2,
    name: "Blas Moros",
    company: "wabi",
    avatar: "https://i.pravatar.cc/80?img=53",
    quote: [
      "Async is my go-to PM copilot. It closes loops, keeps things from falling through the cracks, and helps us keep the most important thing the most important thing.",
      "It's dead simple to use, the team really cares, and the product gets better every single week!",
    ],
  },
  {
    id: 3,
    name: "Sidd Sharma",
    company: "Turf",
    avatar: "https://i.pravatar.cc/80?img=68",
    quote: [
      "Async has helped us stay aligned without adding process or meeting overhead. It keeps context organized across the places we already work, and taps into flows we already have, making it easy to keep everything searchable and current. I always know what needs to be done, just by a glance.",
    ],
  },
];

// ── Hook: scroll-triggered fade ───────────────────────────────────
const useFadeIn = (delay = 0) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`;
          el.classList.add("tm-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

// ── Card ──────────────────────────────────────────────────────────
const TestimonialCard = ({ item, index }) =>{
  const ref = useFadeIn(index * 0.12);

  return (
    <article className="tm-card tm-fade" ref={ref}>
      <header className="tm-card__header">
        <img
          src={item.avatar}
          alt={item.name}
          className="tm-card__avatar"
          loading="lazy"
        />
        <div className="tm-card__info">
          <span className="tm-card__name">{item.name}</span>
          <span className="tm-card__company">{item.company}</span>
        </div>
      </header>

      <div className="tm-card__body">
        {item.quote.map((para, i) => (
          <p key={i} className="tm-card__para">
            {para}
          </p>
        ))}
      </div>
    </article>
  );
}

// ── Section ───────────────────────────────────────────────────────
const Reviews = () => {
  const headingRef = useFadeIn(0);

  return (
    <section className="tm">
      <div className="tm__inner">
        <h2 className="tm__heading tm-fade" ref={headingRef}>
          What people are saying
        </h2>

        <div className="tm__grid">
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews