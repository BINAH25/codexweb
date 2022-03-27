import React, { useEffect } from "react";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div>
      <section style={{ background: "#111", padding: "20px" }} id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6" data-aos="flip-left">
              <img src="/asset/team.png" alt="about" className="w-75 mt-5" />
            </div>
            <div className="col-md-6" data-aos="flip-right">
              <h3 style={{ color: "white" }} className="fs-25 mb-0 text-center">
                About Us
              </h3>
              <h1
                style={{ color: "orangered" }}
                className="display-6 mb-2 text-center"
              >
                Who <b>We </b>Are
              </h1>
              <hr style={{ color: "white" }} className="w-50 mx-auto" />
              <p style={{ color: "white" }} className="lead mb-4 text-left">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, voluptates sit perferendis accusamus ipsum similique
                ipsam, architecto libero eligendi ad ex doloribus, natus
                provident soluta quos ut ea iste laborum? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Repellat a, ut reprehenderit
                quod dolorum ea iure ab, cupiditate recusandae doloremque vitae?
                Libero a quo cupiditate adipisci nesciunt velit quia architecto!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
