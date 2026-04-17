import React, { useState } from "react";
import "./skills.css";

const skills = [
  {
    question: "Brand Storytelling",
    answer:
      "I shape how brands speak, feel, and stick in people's minds. From founding stories to tone-of-voice guides, I help businesses build a consistent identity across every touchpoint — so customers don't just buy, they believe.",
  },
  {
    question: "Sales & Conversion Copywriting",
    answer:
      "Landing pages, sales emails, product descriptions — I write copy engineered to move people from 'maybe' to 'yes'. Every word earns its place. I study buyer psychology, handle objections early, and guide readers down a clear path to action.",
  },
  {
    question: "SEO Content Writing",
    answer:
      "I create content that ranks and reads like a human wrote it — because one did. I research keywords, structure articles for featured snippets, and write with search intent in mind, so your site gets found by the people who actually need you.",
  },
  {
    question: "Email Copywriting",
    answer:
      "Open rates, click-throughs, replies — I write email sequences that perform across the funnel. Welcome flows, nurture campaigns, product launches, re-engagement series. I balance personality with purpose so your list actually looks forward to hearing from you.",
  },
  {
    question: "Website Copywriting",
    answer:
      "Your website is your hardest-working salesperson. I write homepage, about, services, and contact copy that communicates your value in seconds — clearly, compellingly, and in a voice your ideal clients instantly connect with.",
  },
  {
    question: "Social Media Copy",
    answer:
      "Scroll-stopping captions, punchy hooks, and platform-native language. I write social copy that builds community and drives action — whether it's LinkedIn thought leadership, Instagram captions, or Twitter/X threads that go places.",
  },
  {
    question: "What kind of clients do you work with?",
    answer:
      "Founders, startups, personal brands, and agencies who understand that great copy is an investment, not an expense. If you care about clear communication and measurable results, we'll get along just fine.",
  },
];

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="accordion-section" id="skills">
      <h1 id="aHeader"> My skills</h1>

      <div className="accordion-list">
        {skills.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`accordion-item${item.highlight ? " accordion-item--highlight" : ""}${isOpen ? " accordion-item--open" : ""}`}
            >
              <button
                className="accordion-item__trigger"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <span className="accordion-item__question">{item.question}</span>
                <span className="accordion-item__icon">{isOpen ? "×" : "+"}</span>
              </button>

              <div className="accordion-item__body" aria-hidden={!isOpen}>
                <p className="accordion-item__answer">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills