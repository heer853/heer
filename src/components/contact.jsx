import { Mail, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-section light-section">
      <div className="contact-top">
        {/* LEFT TEXT */}
        <div className="contact-left">
          <p className="contact-intro">
            I'M ALWAYS OPEN TO NEW OPPORTUNITIES, <br />
            COLLABORATIONS, OR JUST A GOOD DESIGN CHAT.
          </p>
        </div>

        {/* RIGHT TEXT */}
        <div className="contact-right">
          <div className="head-box">
          <p className="email-me">EMAIL ME</p>
          <p className="contact-email">heerpateldesigns@gmail.com</p>
          </div>

        {/* DIVIDER LINE */}
        <div className="contact-divider"></div>  

          {/* ICON ROW */}
          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/heer-patel-design/" target="_blank" className="icon-box">
              <Linkedin />
            </a>
            <a href="https://instagram.com/heer_853" target="_blank" className="icon-box">
              <Instagram />
            </a>
            <a href="mailto:heerpateldesigns@gmail.com" className="icon-box">
              <Mail />
            </a>
            <a href="https://www.behance.net/heerchpatel"  target="_blank" className="icon-box behance-box">Bē</a>
          </div>

          
        </div>
      </div>

      {/* HUGE CONNECT TEXT */}
      <div className="contact-bottom">
        <p className="connect-lets">LET’S</p>
        <p className="connect-main">connect</p>
      </div>
    </section>
  );
}
