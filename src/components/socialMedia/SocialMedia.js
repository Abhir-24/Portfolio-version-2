import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a>

      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-google"></i>
        <span></span>
      </a>

      <a
        href={socialMediaLinks.instagram}
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
        <span></span>
      </a>

      {/* <a href={socialMediaLinks.codechef}
       className="icon-button codechef"
        target="_blank"
        rel="noopener noreferrer"
        >
        <i class="fab fa-cuttlefish"></i>
        
        <span></span>
      </a> */}

      <a
        href={socialMediaLinks.leetcode}
        className="icon-button leetcode"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-code"></i>
        <span></span>
      </a>

      <a
        href={socialMediaLinks.gfg}
        className="icon-button gfg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-gg"></i>
        <span></span>
      </a>

      <a
        href={socialMediaLinks.resume}
        className="icon-button resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fas fa-file"></i>
        <span></span>
      </a>
    </div>
  );
}
