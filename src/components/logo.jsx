// Logo.jsx
import React from "react";
import logoImage from "/Users/heerpatel/heer-portfolio/src/assets/logowhite.png"; // adjust path

const Logo = () => {
  return (
    <div className="logowhite">
      <img src={logoImage} alt="Logo" style={{ height: "60px" }} />
    </div>
  );
};

export default Logo;
