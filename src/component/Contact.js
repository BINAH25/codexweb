import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Handle Inputs
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setMsg({ ...msg, [name]: value });
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Object DeStructuring
    // Store Object Data into Variables
    const { name, email, message } = msg;
    try {
      //It is Submitted on port 3000 by default
      // Which is Front End but we need to
      // Submit it on Backend which is on
      // Port 5000. So we need Proxy.
      const res = await fetch("/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      console.log(res.status);
      if (res.status === 400 || !res) {
        window.alert("Message Not Sent. Try Again Later");
      } else {
        // You need to Restart the Server for Proxy Works
        // Now Try Again
        window.alert("Message Sent");
        setMsg({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 " data-aos="fade-down-right">
              <h3 className="fs-25 text-center mb-0 text-white fw-bold">
                Contact Us
              </h3>
              <h1 className="display-6 text-center mb-4 text-white">
                Have some <b> Questions? </b>
              </h1>
              <hr
                style={{ color: "white" }}
                className="w-25 mx-auto bg-white"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6"></div>
            <div className="col-md-6" data-aos="fade-up-left">
              <form action="" onSubmit={handleSubmit} method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control bg-transparent text-white"
                    id="name"
                    placeholder="Binah Luis"
                    name="name"
                    value={msg.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control bg-transparent text-white"
                    id="email"
                    placeholder="name@example.com"
                    name="email"
                    value={msg.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label text-white"
                  >
                    Your Message
                  </label>
                  <textarea
                    style={{ resize: "none" }}
                    className="form-control bg-transparent text-white"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="message"
                    value={msg.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button className="btn btn-outline-primary">
                  Send Message<i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
