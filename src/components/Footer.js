import React from "react";

function Footer() {
  return (
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://twitter.com/"
            role="button"
            data-mdb-ripple-color="dark"
          >
          Twitter      
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/in/jalen-moore-17a868233/"
            role="button"
            data-mdb-ripple-color="dark"
          >
          LinkedIn
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/MooreJalen2800"
            role="button"
            data-mdb-ripple-color="dark"
          >
          Github
          </a>
        </section>
      </div>
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p className="text-dark">© 2022 Copyright: Jalen Moore</p>
      </div>
    </footer>
  );
}

export default Footer