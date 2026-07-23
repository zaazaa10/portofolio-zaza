import { ArrowDown, Sparkles } from "lucide-react";
import LanyardCard from "../components/LanyardCard";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-decoration decoration-one">
        ✦
      </div>

      <div className="hero-decoration decoration-two">
        ♡
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hello-badge">
            <Sparkles size={16} />
            Hello, world!
          </div>

          <h1>
            Hi, I'm{" "}
            <span>Zaza</span>
            <br />
            I build things for the web ♡
          </h1>

          <p>
            A junior web developer who loves creating
            beautiful, interactive, and meaningful digital
            experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
              <ArrowDown size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Let's Talk ♡
            </a>
          </div>
        </div>

        <div className="hero-card-container">
          <LanyardCard />
        </div>
      </div>

      <div className="scroll-indicator">
        <span>scroll to explore</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}

export default Hero;