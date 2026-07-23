import { useState } from "react";
import {
  Mail,
  Send,
  Sparkles,
  BriefcaseBusiness,
  Camera,
  Code2,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.message
  ) {
    setStatus("Please fill in all fields ✨");
    return;
  }

  const phoneNumber = "6283169547388";

  const whatsappMessage = `
Hello Zaza! 👋

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
  `;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, "_blank");

  setStatus("Opening WhatsApp... 💌");

  setFormData({
    name: "",
    email: "",
    message: "",
  });
};


  return (
    <section id="contact" className="contact-section">

      {/* HEADER */}
      <div className="section-heading">
        <span className="section-label">
          <Sparkles size={15} />
          Get In Touch
        </span>

        <h2>
          Let's <span>Connect</span>
        </h2>

        <p>
          Have a project in mind or just want to say hello?
          Feel free to reach out!
        </p>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <div className="contact-title">
            <Mail size={28} />
            <h3>
              Let's work
              <span>together!</span>
            </h3>
          </div>

          <p className="contact-description">
            I am always open to new opportunities,
            interesting projects, and new connections.
          </p>

          <div className="social-links">

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="social-card"
            >
              <Code2 size={23} />

              <div>
                <strong>GitHub</strong>
                <span>Check my projects</span>
              </div>
            </a>

            <a
              href="https://www.instagram.com/zaazaovia?igsh=MWNpMTFsYWZpNTB4NQ=="
              target="_blank"
              rel="noreferrer"
              className="social-card"
            >
              <Camera size={23} />

              <div>
                <strong>Instagram</strong>
                <span>Follow my journey</span>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-card"
            >
                <BriefcaseBusiness size={23} />

              <div>
                <strong>LinkedIn</strong>
                <span>Let's connect</span>
              </div>
            </a>

          </div>

        </div>

        {/* FORM */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <h3>
            Send me a message <span>♡</span>
          </h3>

          <div className="form-group">
            <label>Your Name</label>

            <input
              type="text"
              name="name"
              placeholder="What should I call you?"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Your Message</label>

            <textarea
              name="message"
              rows="5"
              placeholder="Write something nice..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="send-button"
          >
            <Send size={17} />
            Send Message
          </button>

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}

        </form>

      </div>

      <footer className="contact-footer">
        Made with ♡ and lots of JavaScript ✨
      </footer>

    </section>
  );
}

export default Contact;