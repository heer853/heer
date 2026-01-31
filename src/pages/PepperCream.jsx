import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";


import peppercream1 from "../assets/peppercream/peppercream1.png";
import peppercream2 from "../assets/peppercream/peppercream2.png";
import peppercream3 from "../assets/peppercream/peppercream3.jpeg";
import peppercream0 from "../assets/peppercream/peppercream0.png";
import peppercream4 from "../assets/peppercream/peppercream4.mov";
import peppercream5 from "../assets/peppercream/peppercream5.jpeg";
import peppercream6 from "../assets/peppercream/peppercream6.jpeg";


import project4 from "../assets/images/project4.png";
import project2 from "../assets/images/project2.png";

import tabButtonImg from "../assets/tabbutton.png";

export default function PepperCream() {
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <BackButton />

      {/* Open button (visible when panel is closed) */}
      {!infoOpen && (
  <button
    onClick={() => setInfoOpen(true)}
    aria-label="Open project info"
    style={{
      position: "fixed",
      right: "0",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 25,
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
    }}
  >
    <img
  src={tabButtonImg}
  alt="Open info panel"
  className="info-tab-img"
/>
  </button>
)}


{/* Slide-in panel */}
<aside className={`info-panel ${infoOpen ? "open" : ""}`}>
  <button className="close-btn" onClick={() => setInfoOpen(false)}>
    ✕
  </button>

  <div className="info-content">
    <h2>Pepper Cream: Gourmet Catering</h2>
    <h3>branding + social media</h3>
    <p>
    <p>Pepper Cream is a luxury gourmet catering brand developed for a wedding design studio’s subsidiary, specialising in elevated culinary experiences. The brief called for a visual identity that felt elegant, expensive, and timeless, using soft pastels and refined detailing to reflect both Indian heritage and global luxury.</p>

<p> The brand system centres on embossed typography, delicate botanical motifs inspired by culinary herbs and spices, and a muted, sophisticated colour palette. Serif and sans-serif typefaces were paired to balance tradition with modern clarity, while ornamental details reference arches, florals, and classic hospitality aesthetics without feeling ornate.</p>

<p> Alongside the core identity, I designed a suite of digital assets including social media grid posts and stories, email designs, and a website landing page. Together, these elements form a cohesive visual language that positions Pepper Cream as a premium, design-led catering brand suited to high-end weddings and events.
</p> 

    </p>

<h4>[scroll to explore]</h4>
  </div>
</aside>


      {/* HERO + GALLERY */}
      <div className="pepper-gallery">
        
        <div className="pepper-hero">
        <img
          src={peppercream1}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        </div>

        <div className="ig-grid">
        <img
          src={peppercream2}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        </div>

        <div className="ig-plates">
        <img
          src={peppercream3}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        </div>

        <div className="zoom-grid">
        <img
          src={peppercream0}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        </div>

        <div className="stories">
        <video
          src={peppercream4}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto reveal"
        />
        </div>

        <div className="mockup">
        <img
          src={peppercream5}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        </div>

        <div className="emails">
        <img
          src={peppercream6}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        </div>

    
      </div>

      {/* LINKS SECTION */}
      <section className="volcano-links">        

        <div className="heartbreak-link">
          <p>
            BEHIND THE SCENES: <br />
            PITCH DECK
          </p>
          <a href="https://www.canva.com/design/DAGVDoqQm-s/YuC0qwKfkAxKQA5kSgBzmw/view?utm_content=DAGVDoqQm-s&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h22aac41e23" target="_blank" rel="noopener noreferrer">
          ↗ view on canva
          </a>
        </div>

      </section>

      {/* OTHER PROJECTS */}
      <section className="harmony-other">
        <h2>other projects</h2>

        <div className="harmony-projects">
          <a href="/flowcus" className="harmony-project-card">
            <img src={project4} alt="Flowcus project" />
          </a>

          <a href="/pepper-cream" className="harmony-project-card">
            <img src={project2} alt="Pepper Cream project" />
          </a>
        </div>
      </section>
    </div>
  );
}
