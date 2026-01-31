import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import rotatingImg from '../assets/rotatingimg.png';
import rotatingImg2 from '../assets/greenrotatingimg.png';




export default function AboutSection() {
  // hook for global scroll progress (0 → 1)
  const { scrollYProgress } = useScroll();

  // "Hi, I'm Heer" anim: scale down and move up early
  const hiScale = useTransform(scrollYProgress, [0, 0.2], [1.7, 0.5]);
  const hiY = useTransform(scrollYProgress, [0, 0.2], ["48vh", "0vh"]);
  const hiX = useTransform(scrollYProgress, [0, 0.2], ["22vw", "-24vw"]);


  // "Brisbane based..." fade/scale into place slightly after
  const brisbaneOpacity = useTransform(scrollYProgress, [0.12, 0.4], [1, 1]);
  const brisbaneScale = useTransform(scrollYProgress, [0.12, 0.4], [1.4, 1]);
  const brisbaneY = useTransform(scrollYProgress, [0.12, 0.4], ["65vh", "-7vh"]);
  const brisbaneX = useTransform(scrollYProgress, [0.12, 0.4], ["-5vw", "-14vw"]);
  
  // skills slide in from right / appear later
  const skillsOpacity = useTransform(scrollYProgress, [0.32, 0.6], [1, 1]);
  const skillsX = useTransform(scrollYProgress, [0.32, 0.5], ["55vw", "10vw"]);
  const skillsY = useTransform(scrollYProgress, [0.5, 0.6], ["20vw", "8vw"]);
  


  return (
    <section id="about" className="about-container">

<motion.img
        src={rotatingImg} // 👈 replace with your image file
        alt="rotating background"
        className="about-bg-image"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 60, // slow spin (increase for slower)
          ease: "linear",
        }}
      />

      <motion.h1
        className="hi-text"
        style={{ scale: hiScale, y: hiY, x: hiX }}
      >
        Hi, I’m Heer
      </motion.h1>

      <motion.h2
        className="brisbane-text"
        style={{ opacity: brisbaneOpacity, scale: brisbaneScale, y: brisbaneY, x: brisbaneX }}
      >
        <span className="lazy-dog">BRISBANE</span> based <span className="lazy-dog">DIGITAL</span> designer,
        <br />specialising in
      </motion.h2>

      <motion.img

        src={rotatingImg2}// 👈 replace with your image file
        alt="rotating background"
        className="about-green-image"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 60, // slow spin (increase for slower)
          ease: "linear",
        }}
      />

      <motion.div
        className="skills"
        style={{ opacity: skillsOpacity, x: skillsX, y: skillsY }}
      >
        <p><span className="lazy-dog caps">GRAPHIC</span> design</p>
        <p><span className="lazy-dog caps">SOCIAL</span> media</p>
        <p><span className="lazy-dog caps">WEB</span> design & dev</p>
      </motion.div>

    </section>
  );
}
