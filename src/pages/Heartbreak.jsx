import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";


import heartbreak1 from "../assets/heartbreak/heartbreak1.jpeg";
import heartbreakvideo1 from "../assets/heartbreak/heartbreakvid1.mov";
import heartbreakvideo2 from "../assets/heartbreak/heartbreakvid2.mov";
import heartbreakvideo3 from "../assets/heartbreak/heartbreakvid3.mov";

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
    <h2>heartbreak havoc</h2>
    <h3>p5.js game</h3>
    <p>
    <p>Heartbreak Havoc is a third-person shooting game that uses symbolic gameplay to explore the five stages of grief: denial, anger, bargaining, depression, and acceptance. Players control a princess character who moves vertically, avoiding and shooting incoming symbols to progress through each stage. Each level introduces distinct visual elements and environments that reflect its emotional theme, with progression driven by score-based milestones.</p>

<p> The game pairs classic arcade-style mechanics with a narrative purpose, framing shooting as a metaphor for overcoming emotional obstacles. It intentionally reimagines a traditionally male-dominated genre through a feminine, playful lens, while remaining mechanically familiar and accessible. Visually, the project balances a vintage, grainy arcade aesthetic with softer, modern elements such as glowing heart-shaped bullets and a stylised protagonist.</p>

<p> More about the process at the end of the page links...</p> 

    </p>

<h4>[scroll to explore]</h4>
  </div>
</aside>


      {/* HERO + GALLERY */}
      <div className="heartbreak-gallery">

        <img
          src={heartbreak1}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />

        <video
          src={heartbreakvideo1}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto reveal"
        />

        <video
          src={heartbreakvideo2}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto reveal"
        />

        <video
          src={heartbreakvideo3}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto reveal"
        />
      </div>

      {/* LINKS SECTION */}
      <section className="heartbreak-links">        

        <div className="heartbreak-link">
          <p>
            PLAY THE GAME <br />
            ONLINE
          </p>
          <a href="https://editor.p5js.org/heer853/full/jldvkgoRa" target="_blank" rel="noopener noreferrer">
          ↗ visit p5js.org
          </a>
        </div>

        <div className="heartbreak-link">
          <p>
            BEHIND THE SCENES: <br />
            PROCESS DOCS
          </p>
          <a href="https://drive.google.com/file/d/1FZd5Ifzn_yoAgxZ1D6sjBR43NFA1VCuP/view?usp=share_link" target="_blank" rel="noopener noreferrer">
            ↗ view on drive
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
