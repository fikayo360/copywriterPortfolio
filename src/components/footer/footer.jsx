import React, { useRef, useEffect } from "react";
import "./footer.css";

// ── Hook: scroll-triggered fade ───────────────────────────────────
function useFadeIn(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`;
          el.classList.add("ft-visible");
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

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Twitter",   href: "https://twitter.com"   },
  { label: "Email",     href: "mailto:hello@studio.com" },
];

const Footer = () => {
  const headingRef = useFadeIn(0);
  const btnRef     = useFadeIn(0.15);
  const bottomRef  = useFadeIn(0.25);

  return (
    <footer className="ft">
      {/* ── Ambient glow ── */}
      <div className="ft__glow" aria-hidden="true" />

      {/* ── Main CTA ── */}
      <div className="ft__cta">
        <h2 className="ft__heading ft-fade" ref={headingRef}>
          Let's build your<br />
          <span className="ft__heading--heavy">Awesome Copy</span>
        </h2>

      </div>

      {/* ── Bottom bar ── */}
      <div className="ft__bottom ft-fade" ref={bottomRef}>
        <span className="ft__copy">
          &copy;{new Date().getFullYear()} Adele Fikayo®
        </span>

        <nav className="ft__socials" aria-label="Social links">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="ft__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
              <span className="ft__social-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer