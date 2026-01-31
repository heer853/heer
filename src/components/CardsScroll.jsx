import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import project7 from "../assets/images/project7.png";
import project8 from "../assets/images/project8.png";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { title: "Avant Garde", subtitle: "Typographic Zine", image: project1, path: "/avant-garde" },
  { title: "Pepper Cream", subtitle: "Branding & Social Media", image: project2, path: "/pepper-cream" },
  { title: "We Collective", subtitle: "Gesture Controlled Mural", image: project3, path: "/we-collective" },
  { title: "Flowcus", subtitle: "Smart Home App", image: project4, path: "/flowcus" },
  { title: "Harmony", subtitle: "Original Typeface", image: project5, path: "/harmony" },
  { title: "Heartbreak Havoc", subtitle: "p5.js Game", image: project6, path: "/heartbreak" },
  { title: "The Judgy Billboard", subtitle: "Road Safety Campaign", image: project7, path: "/billboard" },
  { title: "Volcanoes of the World", subtitle: "React App", image: project8, path: "/volcano" },
];

const RADIUS = 500;

export default function CardsScroll({ workRef }) {
  const navigate = useNavigate();

  const cardsRef = useRef([]);
  const rotationRef = useRef(0);
  const parallaxRef = useRef(null);

  useEffect(() => {
    if (!workRef?.current) return;

    function updateCardsRotation(rotation) {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const angle = (360 / cards.length) * i + rotation;
        card.style.transform = `rotateY(${angle}deg) translateZ(${RADIUS}px)`;
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: workRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 5,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.to(rotationRef, {
      value: 1,
      duration: 1,
      ease: "none",
      onUpdate: () => {
        const progress = tl.progress();
        const rotationDegrees = -360 * 5 * progress;
        rotationRef.current = rotationDegrees;
        updateCardsRotation(rotationDegrees);
      },
    });

    updateCardsRotation(0);

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      gsap.to(parallaxRef.current, {
        rotateX: y * 8,
        rotateY: x * 10,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [workRef]);

  return (
    <div className="w-full h-screen bg-white text-black relative overflow-hidden">
      <section
        style={{ perspective: "8000px" }}
        className="relative h-screen w-full flex items-center justify-center light-section"
      >
        <div className="absolute left-0 top-0 h-full w-60 z-40 pointer-events-none bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 h-full w-60 z-40 pointer-events-none bg-gradient-to-l from-black to-transparent" />

        <div
          ref={parallaxRef}
          style={{
            width: "300px",
            height: "400px",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 0.4s ease",
            marginLeft: "40px",
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "400px",
                height: "280px",
                marginTop: "20px",
                marginLeft: "-225px",
                transformStyle: "preserve-3d",
                transition: "transform 0.5s ease, box-shadow 0.5s ease",
                cursor: "pointer",
                zIndex: 10,
              }}
              onClick={() => {
                sessionStorage.setItem("scrollY", window.scrollY);
                navigate(card.path);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.zIndex = 100;
                const overlay = e.currentTarget.querySelector(".overlay");
                if (overlay) overlay.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const index = cardsRef.current.indexOf(e.currentTarget);
                const angle = (360 / cards.length) * index + rotationRef.current;
                e.currentTarget.style.transform = `rotateY(${angle}deg) translateZ(${RADIUS}px)`;
                e.currentTarget.style.zIndex = 10;
                const overlay = e.currentTarget.querySelector(".overlay");
                if (overlay) overlay.style.opacity = "0";
              }}
            >
              <div style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d" }}>
                {/* FRONT */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow:
                      "0 8px 32px rgba(0,0,0,0.35), inset 0 0 0 0.5px rgba(255,255,255,0.15)",
                    zIndex: 60,
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />

                  <div
                    className="overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(20,20,20,0.3)",
                      backdropFilter: "blur(5px)",
                      WebkitBackdropFilter: "blur(5px)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                      borderRadius: "1.5rem",
                      textAlign: "center",
                      padding: "1rem",
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "LazyDog" }}>
                      {card.title}
                    </div>
                    <div style={{ fontSize: "1rem", opacity: 0.85, fontFamily: "LazyDog" }}>
                      {card.subtitle}
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={card.image}
                    alt={`${card.title} back`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "blur(20px) brightness(1)",
                      opacity: 0.5,
                      transform: "scaleX(-1)",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
