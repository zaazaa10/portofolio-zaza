import {
  Code2,
  Palette,
  Braces,
  Database,
  Atom,
  Server,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    name: "HTML",
    description: "Menyusun struktur website",
  },
  {
    icon: Palette,
    name: "CSS",
    description: "Membuat tampilan menarik",
  },
  {
    icon: Braces,
    name: "JavaScript",
    description: "Membuat website interaktif",
  },
  {
    icon: Database,
    name: "MySQL",
    description: "Mengelola dan menyimpan data",
  },
  {
    icon: Atom,
    name: "React JS",
    description: "Membuat UI yang menarik",
  },
  {
    icon: Server,
    name: "Node.js",
    description: "Membangun backend aplikasi",
  },
];

function Education() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <span className="section-label">
          <Sparkles size={15} />
          What I Know
        </span>

        <h2>
          My <span>Skills</span>
        </h2>

        <p>
          Technologies and tools that I use to build
          creative digital experiences.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              className="skill-card"
              key={skill.name}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="skill-icon">
                <Icon size={45} strokeWidth={1.8} />
              </div>

              <h3>{skill.name}</h3>

              <p>{skill.description}</p>

              <div className="skill-sparkle">
                ✦
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;