import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";


import wecollective1 from "../assets/wecollective/wecollective1.mov";
import wecollective2 from "../assets/wecollective/wecollective2.jpeg";
import wecollective3 from "../assets/wecollective/wecollective3.jpeg";
import wecollective4 from "../assets/wecollective/wecollective4.jpeg";
import wecollective5 from "../assets/wecollective/wecollective5.jpeg";
import wecollective6 from "../assets/wecollective/wecollective6.jpeg";
import wecollective7 from "../assets/wecollective/wecollective7.jpeg";
import wecollective8 from "../assets/wecollective/wecollective8.jpeg";
import wecollective9 from "../assets/wecollective/wecollective9.jpeg";
import wecollective10 from "../assets/wecollective/wecollective10.mov";
import wecollective11 from "../assets/wecollective/wecollective11.jpeg";

import project4 from "../assets/images/project4.png";
import project2 from "../assets/images/project2.png";

import tabButtonImg from "../assets/tabbutton.png";

export default function WeCollective() {
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
          <h2>the we collective</h2>
          <h3>gesture controlled interactive mural</h3>
          <p>
            <p>Harmony is a uppercase block font that draws its inspiration from the intricate and vital role that they play in nature. Bees are essential for maintaining ecological balance through pollination. The idea behind "Harmony" is to reflect this symbiotic relationship between bees and the natural world.</p>

            <p> Aesthetically, "Harmony" embodies the graceful and structured anatomy of a bee. The font's design incorporates elements from a bee's body parts- such as the foreleg, mid leg, forewing, and back wing - to form the basic shapes of the letters. Each letter is meticulously crafted to evoke the elegance and functionality found in nature's design.</p>

            <p> Just as bees harmonise with the environment through their actions, "Harmony" aims to bring a sense of balance and cohesion to typographic design, offering a unique blend of organic forms and typographic functionality.</p>

          </p>

          <h4>[scroll to explore]</h4>
        </div>
      </aside>


      {/* HERO + GALLERY */}
      <div className="wecoll-gallery">
        <video
          src={wecollective1}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto reveal"
        />
      </div>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/lyb79FsWbSg?si=KQyAJ_c6qAwVvuV8"
          title="Youtube video"
          style={{
            border: "0px",
            width: "1120px",
            height: "630px",
            borderRadius: "15px",
            marginLeft: "12%",
            marginRight: "25%",
          }}
          allowFullScreen
          className="w-full h-auto reveal"
        />
        <h2>promotional video + process documentation</h2>
        <h3>[watch for full context]</h3>
      </div>

      <div className="wecoll2-gallery">
        <img
          src={wecollective2}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        <h2>exhibition setup @QUT Design festival</h2>

        <img
          src={wecollective3}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        <h2>gesture controlled interface</h2>

        <img
          src={wecollective4}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />

        <img
          src={wecollective5}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />

        <div className= "six-seven">
        <img
          src={wecollective6}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        </div>


        <img
          src={wecollective7}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        
        <img
          src={wecollective8}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />

        <img
          src={wecollective9}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        <h2>receiving the DIA award @QUT Design festival</h2>

        <video
          src={wecollective10}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto reveal"
        />

        <img
          src={wecollective11}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
      </div>

      {/* LINKS SECTION */}
      <section className="harmony-links">
        <div className="harmony-link">
          <p>
            WATCH IN ACTION <br />
            DEMO VIDEO
          </p>
          <a href="https://youtu.be/LxpdgVK6MQs?si=_cVF3kvC2KBlztiw" target="_blank" rel="noopener noreferrer">
            ↗ go to youtube
          </a>
        </div>

        <div className="harmony-link">
          <p>
            BEHIND THE SCENES: <br />
            PROCESS DOCS
          </p>
          <a href="https://drive.google.com/file/d/16ExwJ04eTooxovVS8OxxsAdD1VDLl1N7/view?usp=share_link" target="_blank">
            ↗ view as pdf
          </a>
        </div>

        <div className="harmony-link">
          <p>
            BEHIND THE SCENES: <br />
            SUMMARISED
          </p>
          <a href="https://drive.google.com/file/d/1_WvxMmbOxepvb8EYRtpuekzXtJf2hQzj/view?usp=share_link" target="_blank" rel="noopener noreferrer">
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
