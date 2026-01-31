import { useNavigate } from "react-router-dom";
import backButtonImg from "../assets/backbutton.png";

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");

    setTimeout(() => {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 60);
  };

  return (
    <button
      onClick={handleBack}
      aria-label="Go back to work section"
      className="back-button"
    >
      <img
        src={backButtonImg}
        alt="Back"
        className="back-button-img"
      />
    </button>
  );
}
