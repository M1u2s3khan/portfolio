import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {

  const [counts, setCounts] = useState({
  projects: 0,
  tech: 0,
  client: 0,
  quality: 0
});

useEffect(() => {
  const handleScroll = () => {
    const section = document.getElementById("projectCounter");

    if (!section) return;

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight) {
      startCounter();
      window.removeEventListener("scroll", handleScroll);
    }
  };

  const startCounter = () => {
    let start = 0;

    const timer = setInterval(() => {
      start += 1;

      setCounts({
        projects: Math.min(start, 6),
        tech: Math.min(start * 2, 12),
        client: Math.min(start * 2, 10),
        quality: Math.min(start * 4, 24)
      });

      if (start >= 6) clearInterval(timer);
    }, 80);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);








const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
     toast.error("Please fill all fields");
    return;
  }

  console.log("Form Data:", formData);

   toast.success("You Inquiry Successfully 🚀");

  setFormData({
    name: "",
    email: "",
    message: ""
  });
};




  return (
    <>
     <div>
  {/* Hero section  */}
  <section className="hero">
    <div className="container">
      <div className="row align-items-center">
        {/* LEFT CONTENT */}
        <div className="col-lg-6 text-center text-lg-start">
          <p className="badge-work mt-5">
            <span className="dot" /> Available for freelance work
          </p>
          <h1 className="hero-title">
            Hi, I'm <span>Mushahid</span>
          </h1>
          <h2 className="hero-role">
            Full-Stack Developer
          </h2>
          <p className="hero-desc">
            I build scalable web applications, modern UI systems and enterprise software solutions using modern technologies.
          </p>
          <div className="hero-buttons">
            <a href="Mushahid_Resume1.docx" className="btn btn-modern me-3 mt-2" download>
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline-light mt-2">
              Contact Me
            </a>
          </div>
          <div className="social-icons mt-4">
            <a href="https://www.linkedin.com/feed/"><i className="bi bi-linkedin" /></a>
            <a href="https://github.com/M1u2s3khan"><i className="bi bi-github" /></a>
            <a href="https://web.whatsapp.com/"><i className="bi bi-whatsapp" /></a>
            <a href="https://www.facebook.com/mushahid.khan.7559"><i className="bi bi-facebook" /></a>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="col-lg-6 text-center">
          <div className="hero-image">
            <img src="images/mushahid.jpg.png" className="img-fluid hero-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about page open  */}
  <section id="about" className="py-5 bg-dark text-light">
    <div className="container">
      <div className="row align-items-center g-5">
        {/* Content */}
        <div className="col-lg-6">
          <h1 className="fw-bold mb-3 text-info">About Me</h1>
          <p className="lead">
            Hello! I’m <strong>Mushahid</strong>, a seasoned Full-Stack Engineer with over 1+ years of experience architecting and delivering high-performance web applications.
          </p>
          <p>
            I specialize in crafting pixel-perfect user interfaces and building scalable backend systems that handle high traffic and complex logic.
          </p>
          <p>
            My work combines deep technical expertise with a focus on design and user experience.
          </p>
          {/* Skills */}
          <h1 className="fw-bold mb-3 text-info mt-4">Core Expertise</h1>
          <div className="d-flex flex-wrap gap-2 mt-3">
            <span className="badge bg-info text-dark p-3">React / Next.js</span>
            <span className="badge bg-info text-dark p-3">Node.js &amp; Express</span>
            <span className="badge bg-info text-dark p-3">MongoDB &amp; SQL</span>
            <span className="badge bg-info text-dark p-3">REST API &amp; GraphQL</span>
            <span className="badge bg-info text-dark p-3">Responsive UI Design</span>
          </div>
          {/* Buttons */}
          <div className="mt-4">
            <a href="#project" className="btn btn-outline-light me-2">
              Projects
            </a>
            <a href="#contact" className="btn btn-outline-light">
              Contact Me
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="col-lg-6 text-center">
          <img src="images/mushahid.jpg.png" className="img-fluid rounded shadow-lg" style={{maxWidth: 350}} />
        </div>
      </div>
    </div>
  </section>
  {/* about page close   */}
  {/* tech stack open  */}
  <section className="tech-section">
    <h2 className="title">Technologies I Use</h2>
    <div className="tech-container">
      {/* Frontend */}
      <div className="tech-card">
        <h3>Frontend Technologies</h3>
        <div className="tech-grid">
          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <p>HTML5</p>
          </div>
          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <p>CSS3</p>
          </div>
          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <p>JavaScript</p>
          </div>
          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <p>React</p>
          </div>
          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
            <p>Bootstrap</p>
          </div>
          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
            <p>Tailwind</p>
          </div>
          <div className="tech-box">
            <img src="https://jayeola-gbolahan.vercel.app/assets/mui-Dpxb71wQ.png" />
            <p>MUI</p>
          </div>
        </div>
      </div>
      {/* Backend */}
      <div className="tech-card">
        <h3>Backend Technologies</h3>
        <div className="tech-grid">
          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <p>Node.js</p>
          </div>
          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
            <p>Express</p>
          </div>
          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            <p>MongoDB</p>
          </div>
          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            <p>MySQL</p>
          </div>
          <div className="tech-box">
            <img src="https://jayeola-gbolahan.vercel.app/assets/fastApi-Dzhigqxf.png" />
            <p>Fast API</p>
          </div>
          <div className="tech-box">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* tech stack close  */}
  {/* skill start  */}
  <section id="skills" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center fw-bold mb-5">Skills</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              <span>HTML</span><span>85%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-success" style={{width: '85%'}} />
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              <span>CSS</span><span>85%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-info" style={{width: '85%'}} />
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              <span>JavaScript</span><span>70%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-warning" style={{width: '70%'}} />
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              <span>Bootstrap</span><span>80%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-primary" style={{width: '80%'}} />
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              <span>React Js</span><span>70%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-primary" style={{width: '70%'}} />
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              <span>Node Js</span><span>65%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-primary" style={{width: '65%'}} />
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              <span>Express Js</span><span>65%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-primary" style={{width: '65%'}} />
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              <span>MongoDB</span><span>65%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-dark" style={{width: '65%'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* skill close  */}
  {/* project start */}
  <section id="projectCounter" className="py-5 bg-dark">
  <div className="container">
    <h2 className="text-white text-center font-bold mb-5">Projects</h2>

    <div className="row g-4 text-center">

      <div className="col-6 col-md-3">
        <div className="p-4 rounded-4 border border-secondary bg-black bg-opacity-25 shadow">
          <h2 className="fw-bold text-info">{counts.projects}</h2>
          <p className="text-light small">Projects Completed</p>
        </div>
      </div>

      <div className="col-6 col-md-3">
        <div className="p-4 rounded-4 border border-secondary bg-black bg-opacity-25 shadow">
          <h2 className="fw-bold text-success">{counts.tech}</h2>
          <p className="text-light small">Technologies Used</p>
        </div>
      </div>

      <div className="col-6 col-md-3">
        <div className="p-4 rounded-4 border border-secondary bg-black bg-opacity-25 shadow">
          <h2 className="fw-bold text-warning">{counts.client}</h2>
          <p className="text-light small">Client Satisfaction</p>
        </div>
      </div>

      <div className="col-6 col-md-3">
        <div className="p-4 rounded-4 border border-secondary bg-black bg-opacity-25 shadow">
          <h2 className="fw-bold text-danger">{counts.quality}</h2>
          <p className="text-light small">Code Quality</p>
        </div>
      </div>

    </div>
  </div>
</section>

  {/* project close  */}
  {/* contact page open  */}
  <section id="contact" className="py-5 bg-dark">
    <div className="container">
      <h2 className="text-center text-white mb-5 text-lg font-bold">Contact Me</h2>
      <div className="row g-4">
        {/* Contact Info */}
        <div className="col-md-4">
          <div className="p-4 rounded-4 border border-secondary bg-black bg-opacity-25 shadow text-center">
            <h4 className="text-info">Email</h4>
            <p className="text-light small"><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl">mushahidkhanm614@gmail.com</a></p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 rounded-4 border border-secondary bg-black bg-opacity-25 shadow text-center">
            <h4 className="text-success">Phone</h4>
            <p className="text-light small">+91 9193467559</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 rounded-4 border border-secondary bg-black bg-opacity-25 shadow text-center">
            <h4 className="text-warning">Location</h4>
            <p className="text-light small">Noida, India</p>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="row justify-content-center mt-5 align-items-stretch">
        {/* FORM */}
        <div className="col-lg-6 d-flex">
          <div className="p-4 rounded-4 border border-secondary bg-black bg-opacity-25 shadow w-100 h-100">
     <form
  onSubmit={handleSubmit}
  className="h-100 d-flex flex-column justify-content-center"
>

<label className="text-white mb-2">Your Name</label>
<input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  className="form-control mb-3 bg-dark text-white border-secondary"
  placeholder="Your Name"
/>

<label className="text-white mb-2">Your Email</label>
<input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  className="form-control mb-3 bg-dark text-white border-secondary"
  placeholder="Your Email"
/>

<label className="text-white mb-2">Your Message</label>
<textarea
  name="message"
  rows="4"
  value={formData.message}
  onChange={handleChange}
  className="form-control mb-3 bg-dark text-white border-secondary"
  placeholder="Your Message"
/>

<button type="submit" className="btn btn-info w-100">
  Send Message
</button>
<ToastContainer position="top-right" autoClose={4000} theme="colored" />
</form>

          </div>
        </div>
        {/* IMAGE */}
        <div className="col-lg-6 d-flex">
          <div className="w-100 h-100">
            <img src="https://img.freepik.com/premium-photo/business-website-page-contact-businessman-touching-contact-us-icons-customer-service-include-telephone-address-email-message-by-3d-render_50039-2828.jpg" className="img-fluid rounded shadow-lg w-100 h-100" style={{objectFit: 'cover'}} />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* constact page close  */}
 

 

</div>
<div className="position-fixed bottom-0 end-0 p-3 d-flex flex-column gap-2" style={{zIndex:"9999"}}>

  <a 
    href="tel:+919193467559" 
    className="btn rounded-circle d-flex align-items-center justify-content-center"
    style={{width:"55px",height:"55px", backgroundColor:"#b00", color:"#fff"}}
  >
    <i className="bi bi-telephone-fill"></i>
  </a>

  <a
    href="https://wa.me/919193467559?text=Hello%20Mushahid%20I%20want%20to%20talk%20about%20a%20project"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-success rounded-circle d-flex align-items-center justify-content-center"
    style={{width:"55px",height:"55px"}}
  >
    <i className="bi bi-whatsapp"></i>
  </a>

</div>


    </>
  )
}

export default Home