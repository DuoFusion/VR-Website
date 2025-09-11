import { Link } from "react-router-dom";
import { Href } from "../constants";

const TapTop = () => {
  const executeScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <Link to={Href} className="back-to-top" onClick={executeScroll}>
      <i className="fas fa-angle-up" />
    </Link>
  );
};

export default TapTop;
