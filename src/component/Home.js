import React from "react";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function () {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1
                style={{ color: "orangered" }}
                className="display-4 fw-bolder mb-4 mt-5 text-center"
              >
                Feel the New Business Perspective
              </h1>
              <p className="lead text-center fs-5 mb-5 mt-5 text-white fw-bold">
                <Typical
                  steps={[
                    "We Develop Amazing Websites 💻 ",
                    1000,
                    "Enthusiatic Web Development 👍",
                    1000,
                    "Full Stack Development 💻 ",
                    1000,
                    "Creative Web Development 😃",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </p>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-outline-primary me-4 rounded-pill px-4 py-2 text-white">
                  Get Quote
                </button>
                <button className="btn btn-outline-primary me-4 rounded-pill px-4 py-2 text-white">
                  <Link className="links" to="/service">
                    Services
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
