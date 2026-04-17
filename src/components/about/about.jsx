import './about.css'
import React, { useEffect, useRef } from "react";
import "./about.css";

const paragraphs = [
  "I’ve always believed that the best copy isn’t just written; it’s engineered. While many writers focus solely on the fluff, my approach is rooted in the intersection of technical logic and human psychology. With a background in Computer Science, I don't just look at a blank page; I look at a system that needs to be optimized for conversion.",
  "My journey began with a deep dive into how technology serves people. Navigating the complexities of business systems and data collection taught me one vital lesson: information is useless if it isn’t accessible. This realization pivoted my focus from building the back-end of businesses to crafting the front-facing narratives that actually drive user action and engagement",
  "In my current role leading digital marketing and IT operations, I spend my days at the heart of the customer journey. Whether I’m managing digital advertising campaigns or implementing ERP systems, I am constantly analyzing what makes a user click, stay, and convert. I take that raw data and translate it into persuasive copy that speaks directly to a customer’s pain points and aspirations.",
  "A significant portion of my recent work has been dedicated to the solar energy sector, a field where technical specs often overshadow human benefits. I specialize in taking complex concepts—like renewable energy ROI or technical solar installations—and turning them into educational, high-converting content that celebrates the move toward a more sustainable future.",
  "I bring a data-driven strategic planning mindset to every project. I don’t believe in writing for the sake of filling space. Every headline, call-to-action, and product description is a calculated move designed to improve a process or solve a problem. My goal is to ensure your brand's voice is as efficient as the systems that run your business",
  "Whether you are looking to demystify a complex technical product or scale your digital presence through high-fidelity marketing collateral, I’m here to help. I combine exceptional organizational skills with a proactive approach to ensure that your message doesn't just get heard—it gets results. Let’s connect and start engineering a narrative that works as hard as you do."
];
const About = () => {
  const labelRef = useRef(null);
  const parasRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    if (labelRef.current) observer.observe(labelRef.current);
    parasRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id='about'>
      <div className="about__inner">
        <span
          className="about__label"
          ref={labelRef}
        >
          Bio:
        </span>

        <div className="about__body">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="about__paragraph"
              ref={(el) => (parasRef.current[i] = el)}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About