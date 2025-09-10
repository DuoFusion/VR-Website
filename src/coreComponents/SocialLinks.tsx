import { FC } from "react";
import { Link } from "react-router-dom";
import { SocialLinksProps } from "../types";

const socialConfig = [
  { key: "facebook", icon: "fab fa-facebook-f" },
  { key: "twitter", icon: "fab fa-twitter" },
  { key: "linkedin", icon: "fab fa-linkedin-in" },
  { key: "youtube", icon: "fab fa-youtube" },
  { key: "instagram", icon: "fab fa-instagram" },
];

const SocialLinks: FC<SocialLinksProps> = ({ socialMedia, variant = "inline" }) => {
  const links = socialConfig
    .filter(({ key }) => socialMedia?.[key])
    .map(({ key, icon }) => (
      <Link key={key} to={socialMedia[key] as string} target="_blank" rel="noopener noreferrer">
        <i className={icon} />
      </Link>
    ));

  if (variant === "list") {
    return (
      <ul className="social-link">
        {socialConfig.map(
          ({ key, icon }) =>
            socialMedia?.[key] && (
              <li key={key}>
                <Link to={socialMedia[key] as string} target="_blank" rel="noopener noreferrer">
                  <i className={icon} />
                </Link>
              </li>
            )
        )}
      </ul>
    );
  }

  // inline (default)
  return links;
};

export default SocialLinks;
