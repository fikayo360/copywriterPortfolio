import { useState, useEffect, useRef } from "react";
import "./nav.css";

const navLinks = [
  { label: "Home",    href: "#home"},
  { label: "About",   href: "#about"},
  { label: "Works",   href: "#works"},
  { label: "Skills",  href: "#skills"},
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive]     = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible]   = useState(false);
  const indicatorRef            = useRef(null);
  const listRef                 = useRef(null);

  // Shrink pill on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  // Slide indicator to active item
  useEffect(() => {
    const list = listRef.current;
    const indicator = indicatorRef.current;
    if (!list || !indicator) return;

    const activeBtn = list.querySelector(".nav__btn--active");
    if (!activeBtn) return;

    const listRect = list.getBoundingClientRect();
    const btnRect  = activeBtn.getBoundingClientRect();

    indicator.style.width  = `${btnRect.width}px`;
    indicator.style.left   = `${btnRect.left - listRect.left}px`;
  }, [active]);

  return (
    <header className={`nav${scrolled ? " nav--scrolled" : ""}${visible ? " nav--visible" : ""}`}>
      <nav className="nav__pill" role="navigation" aria-label="Main navigation">

        {/* ── Sliding indicator ── */}
        <span className="nav__indicator" ref={indicatorRef} aria-hidden="true" />

        <ul className="nav__list" ref={listRef} role="list">
          {navLinks.map((link) => (
            <li key={link.label} role="listitem">
              <a
                href={link.href}
                className={`nav__btn${active === link.label ? " nav__btn--active" : ""}`}
                onClick={() => setActive(link.label)}
                aria-current={active === link.label ? "page" : undefined}
              >
                {/* Icon — visible on mobile only */}
                <span className="nav__icon" aria-hidden="true">
                  {link.icon}
                </span>
                {/* Label — visible on desktop */}
                <span className="nav__label">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar