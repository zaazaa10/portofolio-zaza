import { Heart } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Heart size={18} fill="currentColor" />
        zaza gemes pacar kindparker
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-badge">
        ✦ Available for work
      </div>
    </nav>
  );
}

export default Navbar;