import React from "react";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Primary links come from your CV (GitHub & LinkedIn). Other links are left as placeholders.
const socialIcons = [
  { icon: faGithub, label: "GitHub", link: "https://github.com/MokhlesBenna" },
  { icon: faLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/mokhlesbenna" },
  { icon: faEnvelope, label: "Email", link: "bennamokhles@gmail.com" },
  // Optional/visual links (replace if you have profiles)

];

const SocialMedia = ({ className = "" }) => {
  return (
    <nav aria-label="Social media" className={`flex gap-2 ${className}`}>
      {socialIcons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          aria-label={item.label}
          target={item.link.startsWith("http") ? "_blank" : undefined}
          rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-center p-2 rounded-md hover:bg-picto-primary hover:text-white transition"
        >
          <FontAwesomeIcon icon={item.icon} className="text-xl" />
        </a>
      ))}
    </nav>
  );
};

export default SocialMedia;
