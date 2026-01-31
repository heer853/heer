import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutText() {
 return (
    <section id="about" className="about-me" style={{ minHeight: "100vh"}}>
    <div className="about-me-text"
>
        <p><span className="about-me-text-me">me</span></p>
        <p><span className="about-me-text-abt">about</span></p>
      </div>

    <div className="about-me-text-p">
        <p> <span className="about-me-text-p"> I’m a digital designer focused on clear, effective visual communication and well-crafted user experiences. I work across graphic design, web, print, and social media, delivering consistent, practical solutions that support brand goals. I’m also interested in emerging interactive technologies, while maintaining strong fundamentals in traditional design and production. Outside of work, I enjoy time outdoors in the mountains and by the sea, and practicing traditional art regularly as well. </span></p>
            </div>  
    </section>
    );
}