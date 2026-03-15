import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className=" text-white pt-5 pb-4">
  <div className="container text-md-left">
    <div className="row text-md-left">
      {/* About */}
      <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold text-success">
          About
        </h5>
        <p>
          I am Mushahid, a frontend developer who builds modern
          websites using React, JavaScript, HTML and CSS.
        </p>
      </div>
      {/* Community */}
      <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold text-success">
          Community
        </h5>
        <p>
          <a href="https://github.com/M1u2s3khan" className="text-white text-decoration-none">
            <i className="bi bi-github" /> Github
          </a>
        </p>
        <p>
          <a href="#" className="text-white text-decoration-none">
            <i className="bi bi-stack-overflow" /> Stack Overflow
          </a>
        </p>
      </div>
      {/* Social Media */}
      <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 font-weight-bold text-success">
          Social Media
        </h5>
        <p>
          <a href="#" className="text-white text-decoration-none">
            <i className="bi bi-facebook" /> Facebook
          </a>
        </p>
        <p>
          <a href="#" className="text-white text-decoration-none">
            <i className="bi bi-twitter" /> Twitter
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com" className="text-white text-decoration-none">
            <i className="bi bi-linkedin" /> LinkedIn
          </a>
        </p>
        <p>
          <a href="https://web.whatsapp.com/" className="text-white text-decoration-none">
            <i className="bi bi-whatsapp" /> Whatsapp
          </a>
        </p>
      </div>
    </div>
    <hr className="mb-4" />
    {/* Copyright */}
    <div className="row align-items-center">
      <div className="col-md-12 text-center">
        <p>
          © 2026 Mushahid Developer | All Rights Reserved
        </p>
        <p>Crafted with passion and precision</p>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer