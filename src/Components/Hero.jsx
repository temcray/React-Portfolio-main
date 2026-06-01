import { Link } from "react-router-dom";



function Hero() {
  return (
   <section className="hero">
    <div className="hero-text">
      <p className="eyebrow">Front-End Web Developer</p>

      <h1>Tatiana E. McCray</h1>

      <div className="hero-image-wrap">
        <img src="/profile.jpg" alt="Tatiana McCray" className="hero-image" />
      </div>

      <p>
        I'm a front-end developer focused on building responsive, 
        user-centered React applications that feel clear, 
        welcoming, and easy to navigate.
      </p>

      <div className="hero-buttons">
        <Link to="/projects" className="btn primary-btn">
        View Projects
        </Link>

        <a
          onClick={() => window.open("/Tatiana_Resume.pdf")}
          href="/Tatiana_Resume.pdf"
          target="_blank"
          rel="Resume"
          className="btn outline-btn"
        >
          View Resume
        </a>

        <Link to="/contact" className="btn soft-btn">
          Contact Me
        </Link>
      </div>
    </div>
    </section>
  );
}

export default Hero;