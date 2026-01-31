import { useRef } from "react";
import CardsScroll from "./CardsScroll";

export default function Work() {
  const workRef = useRef(null);

  return (
    <section 
      id="work" 
      className="work-section"
      ref={workRef}
    >
      <div className="work-heading">
        <h2>featured</h2>
        <h1>Projects</h1>
      </div>


      <CardsScroll workRef={workRef} />

    </section>
  );
}
