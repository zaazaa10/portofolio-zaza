function CertificateCard({ image, title, issuer }) {
  return (
    <div className="certificate-card">
      <div className="certificate-image">
        <img src={image} alt={title} />
      </div>

      <div className="certificate-info">
        <h3>{title}</h3>
        <p>{issuer}</p>
      </div>
    </div>
  );
}

export default CertificateCard;