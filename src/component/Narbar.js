import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../Data";
import { Link } from "react-router-dom";

/*export default function () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className=" link " to="/service">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <a className="navbar-brand fw-bolder fs-4 mx-auto">
            <h1 className="code">
              {" "}
              Codex <span className="codex">Technologies</span>
            </h1>
          </a>
          <button className="social ">
            <i className="fa fa-facebook me-2"></i>
          </button>
          <button className="social">
            <i className="fa fa-twitter me-2"></i>
          </button>
          <button className="social">
            <i className="fa fa-linkedin me-2"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}*/

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h1 className="navbar-brand text-white fw-bolder fs-25">
            <Link className="link" to="/">
              <span className="logo">CODEX </span> TECHNOLOGIES
            </Link>
          </h1>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
