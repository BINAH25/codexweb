import React from "react";

export default function Footer() {
  return (
    <div>
      <section id="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1
                style={{ color: "#ffffff" }}
                className="display-4 text-center fs-5 mt-3"
              >
                © 2022 <span className="code ">Codex Technologies</span>,
                <br /> All rights reserved.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
