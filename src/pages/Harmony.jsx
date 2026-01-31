import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";


import harmonyVideo from "../assets/harmony/harmony2.mov";
import harmonyImage3 from "../assets/harmony/harmony3.jpeg";
import harmonyImage4 from "../assets/harmony/harmony4.jpeg";
import harmonyImage5 from "../assets/harmony/harmony5.jpeg";

import project4 from "../assets/images/project4.png";
import project2 from "../assets/images/project2.png";

import tabButtonImg from "../assets/tabbutton.png";

export default function Harmony() {
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
    <h2>Harmony: Experimental Typeface</h2>
    <h3>inspired by bees</h3>
    <p>
    <p>Harmony is a uppercase block font that draws its inspiration from the intricate and vital role that they play in nature. Bees are essential for maintaining ecological balance through pollination. The idea behind "Harmony" is to reflect this symbiotic relationship between bees and the natural world.</p>

<p> Aesthetically, "Harmony" embodies the graceful and structured anatomy of a bee. The font's design incorporates elements from a bee's body parts- such as the foreleg, mid leg, forewing, and back wing - to form the basic shapes of the letters. Each letter is meticulously crafted to evoke the elegance and functionality found in nature's design.</p>

<p> Just as bees harmonise with the environment through their actions, "Harmony" aims to bring a sense of balance and cohesion to typographic design, offering a unique blend of organic forms and typographic functionality.</p> 

    </p>

<h4>[scroll to explore]</h4>
  </div>
</aside>


      {/* HERO + GALLERY */}
      <div className="harmony-gallery">
        <video
          src={harmonyVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto reveal"
        />

        <img
          src={harmonyImage3}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />

        <img
          src={harmonyImage4}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />

        <img
          src={harmonyImage5}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
      </div>

      {/* LINKS SECTION */}
      <section className="harmony-links">
        <div className="harmony-link">
          <p>
            TRY THE FONT OUT <br />
            FOR PERSONAL USE
          </p>
          <a href="https://drive.google.com/file/d/11UbNvh2_SGn50_IL_iPj0OFFp-9D6xQ3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            ↓ download ttf
          </a>
        </div>

        <div className="harmony-link">
          <p>
            BEHIND THE SCENES: <br />
            PROCESS DOCS
          </p>
          <a href="https://drive.google.com/file/d/1F6YmmTcv9ULPLIl7dZI_7vwlwIja02Ta/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          ↗ view as pdf
          </a>
        </div>

        <div className="harmony-link">
          <p>
            BEHIND THE SCENES: <br />
            BEHANCE
          </p>
          <a href="https://www.behance.net/gallery/204390959/DVB201-A1-Original-Typeface" target="_blank" rel="noopener noreferrer">
            ↗ go to behance
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
