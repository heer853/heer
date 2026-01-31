import { Download } from "lucide-react";

export default function Resume() {
  return (
    <section className="resume-section">
      <div className="resume-content">

        {/* LEFT COLUMN — SKILLS */}
        <div className="resume-left">
          

          <div className="skill-row">
            <p className="skill-title">WEB DESIGN & DEVELOPMENT</p>
            <p className="skill-desc">
              creating beautiful and functional websites that make a strong first impression.
            </p>
          </div>

          <div className="skill-row">
            <p className="skill-title">UI/UX DESIGN</p>
            <p className="skill-desc">
              designing intuitive, user-centred interfaces and experiences.
            </p>
          </div>

          <div className="skill-row">
            <p className="skill-title">SOCIAL MEDIA</p>
            <p className="skill-desc">
              crafting engaging visuals and strategies that boost presence and audience connection.
            </p>
          </div>

          <div className="skill-row">
            <p className="skill-title">DESIGN, MOTION, & 3D</p>
            <p className="skill-desc">
              blending graphic design, motion graphics, and 3D tools to create dynamic visuals.
            </p>
          </div>

          <div className="skill-row">
            <p className="skill-title">GESTURAL & AR DESIGN</p>
            <p className="skill-desc">
              building innovative, touchless, sensor-driven interactions using tools like MediaPipe.
            </p>
          </div>
          <h2 className="resume-heading-skills">my skills</h2>
        </div>

        {/* RIGHT COLUMN — AWARDS */}
        <div className="resume-right">
          <h2 className="resume-heading-awards">awards</h2>

          <div className="award-block">
            <p className="award-title">DIA GRADUATE OF THE YEAR AWARD</p>
            <p className="award-sub">Judge’s Commendation QLD (2025)</p>
            <p className="award-desc">
              Recognised by the Design Institute of Australia
              with a Judge’s Commendation for innovative
              design work and professional readiness.
            </p>
          </div>

          <div className="award-divider"></div>

          <div className="award-block">
            <p className="award-title">DESIGN INSTITUTE OF AUSTRALIA AWARD</p>
            <p className="award-sub">QUT Design Festival (2024)</p>
            <p className="award-desc">
              Recognised for demonstrating a high level of
              academic competency, professionalism, and
              the potential to make a meaningful contribution
              to the design community.
            </p>
          </div>

          {/* DOWNLOAD BUTTON */}
          <a 
          href="https://heer-res-web.tiiny.site"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-download">
            <Download className="download-icon" />
            download resume
          </a>
        </div>

      </div>
    </section>
  );
}
