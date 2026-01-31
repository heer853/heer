import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";


import volcano1 from "../assets/volcano/volcano1.jpeg";
import volcano2 from "../assets/volcano/volcano2.jpeg";
import volcano3 from "../assets/volcano/volcano3.jpeg";
import volcano4 from "../assets/volcano/volcano4.jpeg";
import volcano5 from "../assets/volcano/volcano5.jpeg";

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
    <h2>volcanoes of the world</h2>
    <h3>Client Side React Application</h3>
    <p>
    <p> This React-based web application provides an interactive platform for exploring volcanoes worldwide using data from a REST API. Users can browse volcanoes by country, view key details such as location, elevation, summit type, and eruption history, and explore spatial data through interactive maps. Registered users gain access to analytical bar charts displaying population density around selected volcanoes, enabling more informed, data-driven exploration.</p>

<p> The application integrates AG Grid to support advanced table sorting and filtering, Leaflet for customisable mapping, and Chart.js for responsive data visualisation. User interactions are supported with real-time feedback through authentication notifications and error handling. Strong emphasis was placed on semantic layout, accessibility, and information hierarchy to maintain clarity across dense datasets.</p>

<p> The interface was developed through wireframing and visual prototyping, balancing minimalism with subtle visual detail to create a clean, intuitive experience for navigating complex geographic information.</p> 

    </p>

<h4>[scroll to explore]</h4>
  </div>
</aside>


      {/* HERO + GALLERY */}
      <div className="heartbreak-gallery">

        <img
          src={volcano1}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />

        <img
          src={volcano2}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />

        <img
          src={volcano3}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />

        <img
          src={volcano4}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />

        <img
          src={volcano5}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
      </div>

      {/* LINKS SECTION */}
      <section className="volcano-links">        

        <div className="heartbreak-link">
          <p>
            GET TECHNICAL: <br />
            TEST REPORT
          </p>
          <a href="https://drive.google.com/file/d/1r2zYEmVA8bwatU2ClEIciYKf8W_LMrmw/view?usp=share_link" target="_blank" rel="noopener noreferrer">
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
