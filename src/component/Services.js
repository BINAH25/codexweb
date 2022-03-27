import React, { useEffect } from "react";
import {
  FaLaptop,
  FaGlobe,
  FaMobile,
  FaDesktop,
  FaCode,
  FaCogs,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div>
      <section style={{ background: "#111" }} id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3
                style={{ color: "white" }}
                className="fs-25 text-center mb-0 fw-bolder"
              >
                Our Services
              </h3>
              <h1
                style={{ color: "orangered" }}
                className="display-6 text-center mb-4"
              >
                Our <b> Awesome </b> Services
              </h1>
              <hr style={{ color: "white" }} className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="col-lg-4 md-6 sm-12">
              <div
                style={{ background: "#000000", border: "1px solid #202124" }}
                className="card p-3"
                data-aos="fade-right"
              >
                <div className="card-body text-center">
                  <i
                    style={{ color: "orangered" }}
                    className="fa fa- fa-5x mb-4"
                  >
                    {" "}
                    <FaGlobe />
                  </i>
                  <h5
                    style={{ color: "white" }}
                    className="card-title mb-3 fs-4 fw-bold"
                  >
                    Web Development
                  </h5>
                  <p style={{ color: "white" }} className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 md-6 sm-12">
              <div
                style={{ background: "#000000", border: "1px solid #202124" }}
                className="card p-3"
                data-aos="fade-up"
              >
                <div className="card-body text-center">
                  <i style={{ color: "orangered" }} className=" fa-5x mb-4">
                    <FaMobile />
                  </i>
                  <h5
                    style={{ color: "white" }}
                    className="card-title mb-3 fs-4 fw-bold"
                  >
                    Mobile Apps
                  </h5>
                  <p style={{ color: "white" }} className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 md-6 sm-12">
              <div
                style={{ background: "#000000", border: "1px solid #202124" }}
                className="card p-3"
                data-aos="fade-left"
              >
                <div className="card-body text-center">
                  <i style={{ color: "orangered" }} className=" fa-5x mb-4">
                    <FaLaptop />
                  </i>
                  <h5
                    style={{ color: "white" }}
                    className="card-title mb-3 fs-4 fw-bold"
                  >
                    Web Apps
                  </h5>
                  <p style={{ color: "white" }} className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5" data-aos="fade-up">
            <div className="col-lg-4 md-6 sm-12">
              <div
                style={{ background: "#000000", border: "1px solid #202124" }}
                className="card p-3"
              >
                <div className="card-body text-center">
                  <i style={{ color: "orangered" }} className="f fa-5x mb-4 ">
                    <FaDesktop />
                  </i>
                  <h5
                    style={{ color: "white" }}
                    className="card-title mb-3 fs-4 fw-bold"
                  >
                    Creative Web Design
                  </h5>
                  <p style={{ color: "white" }} className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 md-6 sm-12">
              <div
                style={{ background: "#000000", border: "1px solid #202124" }}
                className="card p-3"
              >
                <div className="card-body text-center">
                  <i style={{ color: "orangered" }} className=" fa-5x mb-4">
                    <FaCode />
                  </i>
                  <h5
                    style={{ color: "white" }}
                    className="card-title mb-3 fs-4 fw-bold"
                  >
                    Unique and Clean
                  </h5>
                  <p style={{ color: "white" }} className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 md-6 sm-12">
              <div
                style={{ background: "#000000", border: "1px solid #202124" }}
                className="card p-3"
              >
                <div className="card-body text-center">
                  <i style={{ color: "orangered" }} className=" fa-5x mb-4">
                    <FaCogs />
                  </i>
                  <h5
                    style={{ color: "white" }}
                    className="card-title mb-3 fs-4 fw-bold"
                  >
                    Highly Customizable
                  </h5>
                  <p style={{ color: "white" }} className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
