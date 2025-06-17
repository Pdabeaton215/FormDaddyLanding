import React from "react";
import "./Landing.css";
import logo from "/logo.jpg";

export default function Landing() {
  return (
    <div className="landing">
      <img src={logo} alt="FormDaddy Logo" className="logo" />
      <h1>🚀 FormDaddy is Launching Soon</h1>
      <p>Secure file delivery & smart forms for your business. We're almost ready!</p>
      <p>Check back soon or contact us at hello@formdaddy.org</p>
    </div>
  );
}
