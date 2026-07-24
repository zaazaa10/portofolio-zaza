function CertificateCard({ image, title, issuer, number }) {
  return (
    <div className="certificate-card">
      <div className="certificate-tape"></div>

      <div className="certificate-number">
        ✦ CERTIFICATE {number}
      </div>

      <div className="certificate-image">
        <img src={image} alt={title} />
      </div>

      <div className="certificate-info">
        <h3>{title}</h3>

        <p>{issuer}</p>

        <span className="certificate-tag">
          ✦ Learning Journey
        </span>
      </div>
    </div>
  );
}

export default CertificateCard;