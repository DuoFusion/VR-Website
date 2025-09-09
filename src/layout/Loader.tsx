import { useEffect, useState } from "react";
import { ImagePath } from "../constants";

const Loader = () => {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFade(true), 1500);
    const hideTimer = setTimeout(() => setShow(false), 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className="preloader"
      style={{
        opacity: fade ? 0 : 1,
        transition: "opacity 0.5s ease",
      }}
    >
      <div className="loader">
        <img src={`${ImagePath}loader.png`} alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
