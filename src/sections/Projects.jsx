import { ExternalLink, Code2, Sparkles } from "lucide-react";

const projects = [
  {
    image: "/images/project-hrms.png",
    title: "HR Management System",
    description:
      "Aplikasi untuk mengelola data karyawan, absensi, cuti, dan berbagai kebutuhan HR.",
    tech: ["React", "Node.js", "MySQL"],
    type: "Web Application",
  },
  {
    image: "/images/project-attendance.png",
    title: "Teacher Attendance System",
    description:
      "Sistem absensi guru untuk membantu proses pencatatan kehadiran secara digital.",
    tech: ["React", "JavaScript", "CSS"],
    type: "Web Application",
  },
  {
    image: "/images/project-pkl.png",
    title: "UI PKL Management System",
    description:
      "Sistem manajemen PKL untuk mengelola siswa, perusahaan, pembimbing, dan logbook.",
    tech: ["React", "Node.js", "MySQL"],
    type: "Web Application",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <span className="section-label">
          <Sparkles size={15} />
          Things I Have Built
        </span>

        <h2>
          My <span>Projects</span>
        </h2>

        <p>
          Some projects that I have created while learning
          and exploring web development.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-type">
                {project.type}
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <button>
                  <ExternalLink size={16} />
                  View Project
                </button>

                <button className="github-button">
                  <Code2 size={16} />
                  Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Projects;