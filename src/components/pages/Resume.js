import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Jalen Moore</h2>
          <ul>
            <li>
              Core competencies in enterpirse content management, full-stack web
              development, data architecture, and managing integrations.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/jalen-moore-17a868233/">
              <img
                src="https://elements-cover-images-0.imgix.net/6481d48a-fe8c-4a97-94a1-663be11e04d1?auto=compress&crop=edges&fit=crop&fm=jpeg&h=800&w=1200&s=a89f14b6da8b1872c642930e08e8287b"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href=""
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            SDL Tridion, Adobe Experience Manager (6.5, As a cloud Service), C#.NET, ASP.NET, JAVA,<br />
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;