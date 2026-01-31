import React, { useEffect, useRef, useState } from "react";

const LINKS = [
  { id: "about", num: "01", label: "about" },
  { id: "work", num: "02", label: "work" },
  { id: "resume", num: "03", label: "resume" },
  { id: "contact", num: "04", label: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const ioRef = useRef(null);
  const retryRef = useRef(0);

  useEffect(() => {
    let mounted = true;

    function initObserver() {
      const sections = Array.from(document.querySelectorAll("section[id]"));
      console.log("[Navbar] found sections:", sections.map((s) => s.id));
      // if sections not ready yet, retry a few times
      if (!sections.length && retryRef.current < 12) {
        retryRef.current += 1;
        setTimeout(initObserver, 150);
        return;
      }
      if (!mounted) return;

      // disconnect previous
      if (ioRef.current) ioRef.current.disconnect();

      const io = new IntersectionObserver(
        (entries) => {
          // pick the visible entry with largest intersectionRatio
          const visible = entries.filter((e) => e.isIntersecting);
          if (visible.length) {
            visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            const id = visible[0].target.id;
            if (id && id !== activeSection) {
              console.log("[Navbar] observer setActiveSection ->", id, "ratio:", visible[0].intersectionRatio);
              setActiveSection(id);
              window.history.replaceState(null, "", `#${id}`);
            }
            return;
          }

          // fallback: choose the entry closest to the viewport top
          let closest = entries
            .map((e) => ({ id: e.target.id, top: Math.abs(e.boundingClientRect.top) }))
            .sort((a, b) => a.top - b.top)[0];
          if (closest && closest.id && closest.id !== activeSection) {
            console.log("[Navbar] fallback picking closest ->", closest.id);
            setActiveSection(closest.id);
            window.history.replaceState(null, "", `#${closest.id}`);
          }
        },
        {
          root: null,
          // trigger when at least 15% visible; also provides multiple ratios to help choose
          threshold: [0.15, 0.35, 0.5],
          // bias where the section is considered visible (tweak if needed)
          rootMargin: "-20% 0px -60% 0px",
        }
      );

      sections.forEach((s) => io.observe(s));
      ioRef.current = io;

      // initial heuristic: if any section is near the middle, set it
      sections.forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= window.innerHeight * 0.5 && r.bottom >= window.innerHeight * 0.2) {
          setActiveSection(s.id);
          window.history.replaceState(null, "", `#${s.id}`);
        }
      });
    }

    initObserver();

    // If user manually changes hash (back/forward), reflect it
    const onHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id) setActiveSection(id);
    };
    window.addEventListener("hashchange", onHash);
    window.addEventListener("resize", initObserver);

    return () => {
      mounted = false;
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("resize", initObserver);
      if (ioRef.current) ioRef.current.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      {LINKS.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={activeSection === link.id ? "active" : ""}
          onClick={(e) => {
            // smooth scroll + update URL and active state
            e.preventDefault();
            const el = document.getElementById(link.id);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
              window.history.pushState(null, "", `#${link.id}`);
              setActiveSection(link.id);
            }
          }}
        >
          <span className="num">{link.num} {link.label}</span>
        </a>
      ))}
    </nav>
  );
}
