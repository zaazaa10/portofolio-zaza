import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

function LanyardCard() {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (window.innerWidth / 2 - event.clientX) / 35;
      const y = (window.innerHeight / 2 - event.clientY) / 35;

      setRotation({
        x: y,
        y: x,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="lanyard-wrapper"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      <div className="lanyard-string">
        <div className="lanyard-label">
          <Sparkles size={16} />
          ZAZA
          <Sparkles size={16} />
        </div>
      </div>

      <div className="id-card">
        <div className="card-hole"></div>

        <div className="profile-image">
          <img
            src="/img/profilezazagemes.jpeg"
            alt="Zaza Profile"
          />
        </div>

        <h2>Zaza</h2>

        <p className="card-role">
          Junior Web Developer
        </p>

        <div className="card-info">
          <span>♡ React</span>
          <span>♡ JavaScript</span>
        </div>

        <div className="card-footer">
          PORTFOLIO ID · 2026
        </div>
      </div>
    </div>
  );
}

export default LanyardCard;