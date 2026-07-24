import CertificateCard from "../components/CertificateCard";

function Certificates() {
  const certificates = [
    {
      image: "/img/sertif.adroid-java03.jpg",
      title: "Android Java Programming",
      issuer: "Online Course",
    },
    {
      image: "/img/sertif.figma-uiux01.jpg",
      title: "UI/UX Design with Figma",
      issuer: "Online Course",
    },
    {
      image: "/img/sertif.web-programing02.jpg",
      title: "HTML, CSS & JS",
      issuer: "Online Course",
    },
  ];

  return (
    <section
      id="certificates"
      className="certificates-section"
    >
      <div className="section-heading">
        <span className="section-label">
          🏆 My Achievement
        </span>

        <h2>
          My <span>Certificates</span>
        </h2>

        <p>
          Some certificates and achievements that I have
          earned throughout my learning journey :D
        </p>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={index}
            image={certificate.image}
            title={certificate.title}
            issuer={certificate.issuer}
          />
        ))}
      </div>
    </section>
  );
}

export default Certificates;