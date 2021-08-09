import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="sign-off">
      <a
        className="code-link"
        href="https://github.com/raphaella-rose/react-app-weather"
      >
        Open-source code
      </a>
      <br />
      <a
        className="signature"
        href="https://www.linkedin.com/in/raphaella-d-alessandro-b31810197/"
      >
        by Raphaella D'Alessandro
      </a>
    </div>
  );
}