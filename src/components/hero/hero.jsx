import Navbar from '../nav/nav';
import './hero.css'
import { useEffect, useRef } from "react";

const Hero = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const elements = [
      line1Ref.current,
      line2Ref.current,
      line3Ref.current,
      subtitleRef.current,
    ];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.animationDelay = `${i * 0.15}s`;
      el.classList.add("animate-in");
    });
  }, []);

  return (
    <section className="hero" id='home'>
      <Navbar />
     <div className="hero__content">
        <h1 className="hero__greeting">
          Hi, I'm <span className="hero__name">fikayo</span>
          <span className="hero__avatar" aria-hidden="true">
            <img
              src="./fikayo.png"
              alt="Fikayo"
              className="hero__avatar-img"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <span className="hero__avatar-fallback" style={{ display: "none" }}>
              F
            </span>
          </span>
        </h1>
 
        <h2 className="hero__title">
          Freelance Copywriter <span className="hero__separator">|</span>{" "}
          Brand Storyteller <span className="hero__separator">|</span> Conversion Writer 
        </h2>
 
        <p className="hero__description">
          I craft words that work — from brand narratives that build trust to
          sales copy that converts and SEO content that gets found. Whether
          you're launching, scaling, or rebranding, I help you say the right
          thing to the right people.
        </p>
 
        <div className="hero__actions">
          <a href="#skills" className="hero__btn hero__btn--primary">
            View work
          </a>
          <a href="/cv.pdf" download className="hero__btn hero__btn--secondary">
            Download cv
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero