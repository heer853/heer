import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";


import avantgarde1 from "../assets/avantgarde/avantgarde1.jpeg";
import avantgarde2 from "../assets/avantgarde/avantgarde2.jpeg";
import avantgarde3 from "../assets/avantgarde/avantgarde3.jpeg";
import avantgarde4 from "../assets/avantgarde/avantgarde4.jpeg";
import avantgarde5 from "../assets/avantgarde/avantgarde5.jpeg";



import project4 from "../assets/images/project4.png";
import project2 from "../assets/images/project2.png";

import tabButtonImg from "../assets/tabbutton.png";

export default function AvantGarde() {
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
    <div className="min-h-screen bg-white text-black billboard-light">
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
    <h2>Avant Garde</h2>
    <h3>typographic zine</h3>
    <p>
    <p>This typographic zine explores the iconic typeface Avant Garde under strict constraints: two colours plus the page colour, and no imagery or shapes beyond the letterforms themselves. Inspired by retro typography archives and the work of Herb Lubalin, the project investigates how type alone can carry visual interest, structure, and narrative.</p>

<p> My process began with broad visual research before narrowing toward a clean, modern direction. Avant Garde’s bold, geometric forms offered the flexibility to experiment with scale, spacing, and composition, using extended letterforms to create rhythm across spreads. A limited palette of blue, black, and white keeps the focus on form and negative space.</p>

<p> As a key experiment, I constructed a portrait of Herb Lubalin using only Avant Garde letterforms, applying photocomposition principles to merge image and text. The project emphasised typographic hierarchy, restraint, and balance, reinforcing the importance of purposeful, expressive type-led design.</p> 

    </p>

<h4>[scroll to explore]</h4>
  </div>
</aside>


      {/* HERO + GALLERY */}
      <div className="zine-gallery">
        
        <img
          src={avantgarde1}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />

        <img
          src={avantgarde2}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />


        <img
          src={avantgarde3}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />

        <img
          src={avantgarde4}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        

        <img
          src={avantgarde5}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />  
      </div>

      <section className="avant-zine">
      <div
  style={{
    position: "relative",
    paddingTop: "max(60%, 324px)",
    width: "100%",
    height: 0,
  }}
>
  <iframe
    src="https://online.fliphtml5.com/cgrlq/onjc/"
    title="Avant Garde - Font Zine"
    style={{
      position: "absolute",
      border: "none",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
    }}
    scrolling="no"
    allowFullScreen
  />
</div>

      </section>


      {/* LINKS SECTION */}
      <section className="heartbreak-links">        


      <div className="heartbreak-link">
          <p>
            BEHIND THE SCENES: <br />
            PROCESS DOCS 
          </p>
          <a href="https://drive.google.com/file/d/1hWFDuQpzZFA4qJagNS99JHK_vrOfGvSZ/view?usp=share_link" target="_blank" rel="noopener noreferrer">
            ↗ view on drive
          </a>
        </div>

        <div className="heartbreak-link">
          <p>
            BEHIND THE SCENES: <br />
            BEHANCE
          </p>
          <a href="https://www.behance.net/gallery/200480871/DVB201-Typographic-Zine" target="_blank" rel="noopener noreferrer">
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
