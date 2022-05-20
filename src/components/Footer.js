import React from "react";

const Footer = () => {
  
    return (
        <footer className="d-flex flex-wrap  align-items-center py-3 my-4 border-top" style={Footer}>
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"></svg>
          </a>
          
        </div>
    
        <ul className="nav col-md-4  list-unstyled d-flex" style={{fontSize: "40px"}}>
        <a className="text-muted" href="https://github.com/jalenmoore2800">
          <li className="ms-3"><i className="bi bi-github"></i></li>
          </a>
          <a className="text-muted"  href="https://www.linkedin.com/in/jalen-moore-17a868233/">
          <li className="ms-3"><i className="bi bi-linkedin"></i></li>
          </a>
          <a className="text-muted" href="http://www.github.com/moorejalen2800">
          <li className="ms-3"><i className="bi bi-github"></i></li>
          </a>
        </ul>
      </footer>
    )
}

export default Footer;
