import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";


import flowcus1 from "../assets/flowcus/flowcus1.jpeg";
import flowcus2 from "../assets/flowcus/flowcus2.jpeg";
import flowcus3 from "../assets/flowcus/flowcus3.jpeg";
import flowcus4 from "../assets/flowcus/flowcus4.mp4";

import project4 from "../assets/images/project4.png";
import project2 from "../assets/images/project2.png";

import tabButtonImg from "../assets/tabbutton.png";

export default function Flowcus() {
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
          <h2>Flowucs: smart home app </h2>
          <h3>designed to be forgotten</h3>
          <p>
            <p> Flowcus is a smart home app designed to support adults with ADHD by reducing everyday friction through rhythm, visibility, and simplicity. Rather than optimising for productivity or control, it reframes automation as cognitive support, helping users move through their environment with less decision-making and mental strain.</p>

            <p> Grounded in primary interviews and co-design sessions with adults with ADHD, the project responds to frustrations with reminder-heavy systems, hidden menus, and complex interfaces. Research revealed a need for tools that offer awareness without pressure and support action without demanding attention. In response, Flowcus centres on custom Routine Presets that quietly automate small but high-friction tasks such as lighting, music, or appliances, adapting to different days and routines.</p>

            <p> The interface is intentionally calm and low-interaction, surfacing real-time device status and activity at a glance. Devices are organised by physical space rather than abstract categories, mirroring how users think about their homes. Designed to be forgotten, Flowcus holds rhythm gently in place, allowing users to conserve energy for what matters most.</p>

          </p>

          <h4>[scroll to explore]</h4>
        </div>
      </aside>


      {/* HERO + GALLERY */}
      <div className="flowcus-gallery">

        <div className="zero">
          <img
            src={flowcus1}
            alt="Harmony project image"
            className="w-full h-auto reveal"
          />
        </div>

        <div className="one-two">
          <img
            src={flowcus2}
            alt="Harmony project image"
            className="w-full h-auto reveal"
          />

          <img
            src={flowcus3}
            alt="Harmony project image"
            className="w-full h-auto"
          />

        </div>

        <div className="last">
          <video
            src={flowcus4}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-auto reveal"
          />
        </div>
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "80vh",
          margin: "6rem 0",
        }}
      >
        <iframe
          src="https://embed.figma.com/proto/B9YtxxsZ4mpkQM0uAwKR4C/Flowcus?node-id=19-20&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=19%3A20&show-proto-sidebar=1&embed-host=share"
          title="Figma prototype"
          style={{
            border: "1px solid rgba(0,0,0,0.1)",
            width: "30%",
            height: "100%",
            marginLeft: "35%",
            borderRadius: "15px",
            backgroundColor: "black",
          }}
          allowFullScreen
        />
      </div>


      {/* LINKS SECTION */}
      <section className="harmony-links">
        <div className="harmony-link">
          <p>
            BEHIND THE SCENES: <br />
            PROCESS DOCS
          </p>
          <a href="https://drive.google.com/file/d/1SQZ6QY2uEAxrNO1jYz6gasS-8YiUjl4I/view?usp=share_link" target="_blank" rel="noopener noreferrer">
            ↗ view as pdf
          </a>
        </div>

        <div className="harmony-link">
          <p>
            TRY OUT THE <br />
            PROTOTYPE
          </p>
          <a href="https://www.figma.com/proto/B9YtxxsZ4mpkQM0uAwKR4C/Flowcus?node-id=19-20&t=CJQtlO0FPwfXSxPb-1&starting-point-node-id=19%3A20" target="_blank" rel="noopener noreferrer">
            ↗ visit figma
          </a>
        </div>

        <div className="harmony-link">
          <p>
            BEHIND THE SCENES: <br />
            SUMMARISED
          </p>
          <a href="https://drive.google.com/file/d/1J4fLfb91zg-B78ZrQ9VVo_Aiirph79QN/view?usp=share_link" target="_blank" rel="noopener noreferrer">
            ↗ view as pdf
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
