import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import TimeLocation from "./components/TimeLocation";
import Logo from "./components/logo";
import Cursor from "./components/cursor";

import AboutSection from "./components/AboutSection";
import AboutText from "./components/AboutText";
import Work from "./components/work";
import Resume from "./components/resume";
import Contact from "./components/contact";

// project pages
import AvantGarde from "./pages/AvantGarde";
import PepperCream from "./pages/PepperCream";
import WeCollective from "./pages/WeCollective";
import Flowcus from "./pages/Flowcus";
import Harmony from "./pages/Harmony";
import Heartbreak from "./pages/Heartbreak";
import Billboard from "./pages/Billboard";
import Volcano from "./pages/Volcano";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // only run on HOME
    if (location.pathname !== "/") return;

    const strip = document.querySelector(".ui-strip");
    const logo = document.querySelector(".logowhite");
    const nav = document.querySelector(".navbar");
    const timeLoc = document.querySelector(".time-location");

    if (!strip || !logo || !nav || !timeLoc) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isLight = entry.isIntersecting;
          strip.classList.toggle("ui-strip-light", isLight);
          nav.classList.toggle("navbar-light", isLight);
          logo.classList.toggle("logo-light-mode", isLight);
          timeLoc.classList.toggle("time-location-light", isLight);
        });
      },
      { threshold: 0.28 }
    );

    document
      .querySelectorAll(".light-section")
      .forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      {/* GLOBAL */}
      <Cursor />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="bg-black text-white font-sans">
              <div className="ui-strip"></div>

              <Logo />
              <Navbar />
              <TimeLocation />

              <section id="about">
                <AboutSection />
                <AboutText />
              </section>

              <section id="work" className="light-section">
                <Work />
              </section>

              <section id="resume">
                <Resume />
              </section>

              <section id="contact" className="light-section">
                <Contact />
              </section>
            </div>
          }
        />

        {/* PROJECT PAGES */}
        <Route path="/avant-garde" element={<AvantGarde />} />
        <Route path="/pepper-cream" element={<PepperCream />} />
        <Route path="/we-collective" element={<WeCollective />} />
        <Route path="/flowcus" element={<Flowcus />} />
        <Route path="/harmony" element={<Harmony />} />
        <Route path="/heartbreak" element={<Heartbreak />} />
        <Route path="/billboard" element={<Billboard />} />
        <Route path="/volcano" element={<Volcano />} />
      </Routes>
    </>
  );
}
