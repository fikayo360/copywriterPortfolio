import './contact.css'

import { useState, useRef, useEffect } from "react";

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
          el.classList.add("ct-visible");
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

const packages = [
  "Brand Storytelling",
  "Sales & Conversion Copywriting",
  "SEO Content Writing",
  "Email Copywriting",
  "Website Copywriting",
  "Social Media Copy",
  "Something else"
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", package: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const illusRef   = useFadeIn(0);
  const headingRef = useFadeIn(0.1);
  const subRef     = useFadeIn(0.2);
  const formRef    = useFadeIn(0.3);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="ct" id='contact'>
      <div className="ct__inner">

        {/* ── Illustration ── */}
        <div className="ct__illus ct-fade" ref={illusRef}>
          <svg
            className="ct__illus-svg"
            viewBox="0 0 200 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Bicycle wheels */}
            <circle cx="60" cy="120" r="28" stroke="#111" strokeWidth="2.5" fill="none"/>
            <circle cx="140" cy="120" r="28" stroke="#111" strokeWidth="2.5" fill="none"/>
            {/* Wheel spokes */}
            <line x1="60" y1="92" x2="60" y2="148" stroke="#111" strokeWidth="1.5"/>
            <line x1="32" y1="120" x2="88" y2="120" stroke="#111" strokeWidth="1.5"/>
            <line x1="40" y1="100" x2="80" y2="140" stroke="#111" strokeWidth="1"/>
            <line x1="80" y1="100" x2="40" y2="140" stroke="#111" strokeWidth="1"/>
            <line x1="112" y1="120" x2="168" y2="120" stroke="#111" strokeWidth="1.5"/>
            <line x1="140" y1="92" x2="140" y2="148" stroke="#111" strokeWidth="1.5"/>
            <line x1="120" y1="100" x2="160" y2="140" stroke="#111" strokeWidth="1"/>
            <line x1="160" y1="100" x2="120" y2="140" stroke="#111" strokeWidth="1"/>
            {/* Frame */}
            <path d="M60 120 L100 70 L140 120" stroke="#111" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
            <path d="M100 70 L90 120" stroke="#111" strokeWidth="2" fill="none"/>
            <path d="M100 70 L115 55 L130 60" stroke="#111" strokeWidth="2" fill="none" strokeLinejoin="round"/>
            {/* Handlebar */}
            <path d="M130 60 L125 50 M130 60 L136 52" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
            {/* Seat */}
            <path d="M95 72 Q100 68 105 72" stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none"/>
            {/* Rider body */}
            <ellipse cx="110" cy="65" rx="12" ry="16" fill="#f0f0f0" stroke="#111" strokeWidth="2"/>
            {/* Head */}
            <circle cx="112" cy="44" r="11" fill="#f0f0f0" stroke="#111" strokeWidth="2"/>
            {/* Party hat */}
            <path d="M106 36 L112 10 L119 36 Z" fill="#111" stroke="#111" strokeWidth="1"/>
            <line x1="112" y1="10" x2="108" y2="4" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="107" cy="3" r="2" fill="#111"/>
            {/* Wand arm */}
            <path d="M122 58 L138 42" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
            {/* Wand sparkles */}
            <path d="M138 42 L134 36 M138 42 L144 38 M138 42 L140 48" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="149" cy="30" r="2" fill="#111"/>
            <circle cx="132" cy="24" r="1.5" fill="#111"/>
            {/* Laptop */}
            <rect x="88" y="78" width="30" height="20" rx="2" fill="#ddd" stroke="#111" strokeWidth="1.5"/>
            <rect x="85" y="97" width="36" height="3" rx="1" fill="#bbb" stroke="#111" strokeWidth="1"/>
            {/* Face details */}
            <circle cx="108" cy="43" r="1.5" fill="#111"/>
            <circle cx="116" cy="43" r="1.5" fill="#111"/>
            <path d="M108 48 Q112 52 116 48" stroke="#111" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        {/* ── Heading ── */}
        <h2 className="ct__heading ct-fade" ref={headingRef}>
          So, let's make some{" "}
          <span className="ct__heading--bold">gooooood stuff together.</span>{" "}
          <span className="ct__heading--light">Because why not?</span>
        </h2>

        {/* ── Subtext ── */}
        <p className="ct__sub ct-fade" ref={subRef}>
          Fill out the form below and we'll get back to you soon!
        </p>

        {/* ── Form ── */}
        {submitted ? (
          <div className="ct__success ct-fade ct-visible">
            <span className="ct__success-icon">✦</span>
            <p>Thank you! We'll be in touch very soon.</p>
          </div>
        ) : (
          <form
            className="ct__form ct-fade"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Name */}
            <div className="ct__field">
              <label className="ct__label" htmlFor="ct-name">Name</label>
              <input
                id="ct-name"
                name="name"
                type="text"
                className="ct__input"
                placeholder="Ivan Petrov"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            {/* Email */}
            <div className="ct__field">
              <label className="ct__label" htmlFor="ct-email">Email</label>
              <input
                id="ct-email"
                name="email"
                type="email"
                className="ct__input"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            {/* Package */}
            <div className="ct__field">
              <label className="ct__label" htmlFor="ct-package">Package</label>
              <div className="ct__select-wrap">
                <select
                  id="ct-package"
                  name="package"
                  className="ct__select"
                  value={form.package}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select...</option>
                  {packages.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                <span className="ct__select-arrow" aria-hidden="true">↓</span>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`ct__btn${loading ? " ct__btn--loading" : ""}`}
              disabled={loading}
            >
              {loading ? "Sending…" : <>Submit <span aria-hidden="true">✦→</span></>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact