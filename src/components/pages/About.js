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
              Philadelphia Based Entry Level Full Stack Developer with hands-on training and experience designing, developing, and
              implementing applications and solutions using a range of technologies and programming
              languages. Seeking to leverage broad development experience and hands-on technical expertise
              in a challenging role as a Full-stack Developer. 
              Clicking photo will nevagate you to my LinkedIN.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/jalen-moore-17a868233/">
              <img
                src="https://blog.waalaxy.com/wp-content/uploads/2021/01/logo-linkedin-actuel.jpg"
                alt="linkedIn"
              />
            </a>
          </p>

          <a
            href="https://docs.google.com/document/d/1LHwfbPZNLFBR9k63x7GGCl1Zps5P52TPDYQYJjVkWLw/edit?usp=sharing"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Skills</h2>
          <ul>
            <li>
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
