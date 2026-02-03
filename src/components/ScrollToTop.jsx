import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const projectPages = [
      "/avant-garde",
      "/pepper-cream",
      "/we-collective",
      "/flowcus",
      "/harmony",
      "/heartbreak",
      "/billboard",
      "/volcano",
    ];

    if (projectPages.includes(pathname)) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // 👈 key line
      });
    }
  }, [pathname]);

  return null;
}
