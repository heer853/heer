import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";


import billboard1 from "../assets/billboard/billboard1.jpeg";
import billboard2 from "../assets/billboard/billboard2.jpeg";
import billboard3 from "../assets/billboard/billboard3.mov";
import billboard4 from "../assets/billboard/billboard4.mov";
import billboard5 from "../assets/billboard/billboard5.jpeg";
import billboard6 from "../assets/billboard/billboard6.mov";
import billboard7 from "../assets/billboard/billboard7.png";
import billboard8 from "../assets/billboard/billboard8.png";


import project4 from "../assets/images/project4.png";
import project2 from "../assets/images/project2.png";

import tabButtonImg from "../assets/tabbutton.png";

export default function Billboard() {
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
    <h2>The Judgy Billboard</h2>
    <h3>a road safety campaign</h3>
    <p>
    <p>This seatbelt safety campaign was developed in collaboration with Re:ACT to encourage 17–25-year-olds to make seatbelt use an automatic, everyday habit. Moving away from fear-based messaging, the campaign uses humour, relatability, and social cues to normalise buckling up on every trip.</p>

<p> My process combined audience research with cultural analysis, drawing inspiration from the media and internet culture this generation has grown up with, including memes, social platforms, and early 2000s teen media. These influences shaped the tone and visual direction, ensuring the message felt familiar rather than instructional. The central concept features a “judgy billboard” character whose sassy, observant personality reflects contemporary online humour, using playful social pressure instead of authority.</p>

<p> Bold typography, limited colour palettes, and strong seatbelt cues ensure high-impact clarity across formats. The campaign extends across billboards, retail spaces, social media, and a supporting website, with animation refined through feedback and audience testing to maximise engagement and memorability.</p> 

    </p>

<h4>[scroll to explore]</h4>
  </div>
</aside>


      {/* HERO + GALLERY */}
      <div className="harmony-gallery">
        
        <div className="top-image">
        <img
          src={billboard1}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        </div>

        <img
          src={billboard2}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />

        <video
          src={billboard3}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto reveal"
        />

        <video
          src={billboard4}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto reveal"
        />

        <img
          src={billboard5}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />

     <div className="wider-images">
        <video
          src={billboard6}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto reveal"
        />

        <img
          src={billboard7}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        <div className="last-img">

        <img
          src={billboard8}
          alt="Harmony project image"
          className="w-full h-auto reveal"
        />
        </div>
      </div>  
      </div>

      {/* LINKS SECTION */}
      <section className="heartbreak-links">        


      <div className="heartbreak-link">
          <p>
            BEHIND THE SCENES: <br />
            PROCESS + RESEARCH 
          </p>
          <a href="https://www.canva.com/design/DAGjcmpt2ho/L8EBut29q4ZS4hA8e245cw/view?utm_content=DAGjcmpt2ho&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4d9950b0a4" target="_blank" rel="noopener noreferrer">
            ↗ view on canva
          </a>
        </div>

        <div className="heartbreak-link">
          <p>
            BEHIND THE SCENES: <br />
            PITCH DECK + TESTING
          </p>
          <a href="https://www.canva.com/design/DAGlD3uSY2o/pNFH-qr-W-qoTmLsawAnbQ/view?utm_content=DAGlD3uSY2o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=habd85f38e6" target="_blank" rel="noopener noreferrer">
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
