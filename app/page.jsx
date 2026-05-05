"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const services = [
    ["glass", "Glass Partitions"],
    ["refurb", "Office Refurbishment"],
    ["ceilings", "Suspended Ceilings"],
    ["flooring", "Flooring"],
    ["decorating", "Decorating"],
    ["joinery", "Doors & Joinery"],
  ];

  const gallery = [
    "IMG_1.JPEG","IMG_2.JPEG","IMG_3.JPEG","IMG_4.JPEG","IMG_5.JPEG",
    "IMG_7.JPEG","IMG_8.JPEG","IMG_9.JPEG","IMG_10.JPEG","IMG_11.JPEG",
  ];

  const slides = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg", "/slide4.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ fontFamily: "'Montserrat', Arial, sans-serif", margin: 0 }}>
      <nav style={{
        background: "#05080c", color: "white", padding: "18px 6%",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        position: "relative", zIndex: 9999, flexWrap: "wrap", gap: 20
      }}>
        <img src="/logo.png" alt="Workspace Design & Build" style={{ height: 90 }} />

        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a>

          <details style={{ position: "relative" }}>
            <summary style={{ color: "white", cursor: "pointer" }}>Our Services ▼</summary>
            <div style={{
              position: "absolute", top: 30, left: 0, background: "white",
              minWidth: 250, boxShadow: "0 10px 30px rgba(0,0,0,0.35)", zIndex: 99999
            }}>
              {services.map(([id, name]) => (
                <a key={id} href={`#${id}`} style={{
                  display: "block", padding: 14, color: "#111",
                  textDecoration: "none", borderBottom: "1px solid #eee"
                }}>{name}</a>
              ))}
            </div>
          </details>

          <a href="#project" style={{ color: "white", textDecoration: "none" }}>Projects</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
          <a href="tel:02082529789" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
            0208 252 9789
          </a>
        </div>
      </nav>

      <section id="home" style={{ height: "75vh", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${slides[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out"
        }} />

        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(0,0,0,0.65), rgba(0,0,0,0.15))"
        }} />

        <div style={{
          position: "absolute", top: "50%", left: "6%",
          transform: "translateY(-50%)", color: "white", maxWidth: 900
        }}>
          <h1 style={{ fontSize: "clamp(42px, 6vw, 76px)", margin: 0, lineHeight: 1.05 }}>
            WORKSPACE DESIGN & BUILD<br />
            <span style={{ color: "#c79a46" }}>LONDON</span>
          </h1>
          <p style={{ fontSize: 22, marginTop: 24 }}>
            Professional office fit out, refurbishment and workspace design across London.
          </p>
          <a href="#contact" style={{
            display: "inline-block", marginTop: 25, background: "#c79a46",
            color: "white", padding: "14px 24px", textDecoration: "none", fontWeight: "bold"
          }}>
            Get a Quote
          </a>
        </div>
      </section>

      <section style={{ padding: "70px 6%" }}>
        <h2>Workspace Design & Build Specialists</h2>
        <p style={{ maxWidth: 900, lineHeight: 1.7, fontSize: 18 }}>
          We provide complete workspace design and build services across London, from planning and refurbishment through to finishes, furniture and handover.
        </p>
      </section>

      <section id="services" style={{ padding: "80px 6%", background: "#f5f5f5" }}>
        <h2>Our Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {services.map(([id, name]) => (
            <div key={id} id={id} style={{ background: "white", padding: 32 }}>
              <h3>{name}</h3>
              <p style={{ lineHeight: 1.6 }}>
                Professional installation, careful planning and high-quality finish for London commercial interiors.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="project" style={{ padding: "80px 6%" }}>
        <h2>1 Whittington Avenue, London</h2>
        <p style={{ maxWidth: 850, lineHeight: 1.7 }}>
          A commercial workspace transformation delivered with a focus on practical layout, clean finishes and a professional working environment.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginTop: 30 }}>
          {gallery.map((img) => (
            <img key={img} src={`/projects/whittington/${img}`} alt="1 Whittington Avenue project"
              style={{ width: "100%", height: 220, objectFit: "cover" }} />
          ))}
        </div>
      </section>

      <section id="process" style={{ padding: "90px 6%", background: "#05080c", color: "white" }}>
  <p style={{ color: "#c79a46", letterSpacing: 2, fontWeight: "bold" }}>HOW WE WORK</p>
  <h2 style={{ fontSize: 42, marginTop: 10 }}>Our Process</h2>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 24,
    marginTop: 40
  }}>
    [
  [
    "01",
    "Consultation",
    "We meet with you to understand your workspace needs, budget and timeline. Our team provides expert advice to ensure the project starts on the right track.",
    "/slide1.jpg"
  ],
  [
    "02",
    "Design",
    "We create a tailored design including layout, materials, finishes and lighting to maximise both functionality and visual impact of your workspace.",
    "/slide2.jpg"
  ],
  [
    "03",
    "Build",
    "Our skilled team delivers the full fit out with precision, managing every stage from construction to installation while maintaining high standards.",
    "/slide3.jpg"
  ],
  [
    "04",
    "Completion",
    "We carry out final checks, ensure quality finishes and hand over a fully completed workspace ready for immediate use.",
    "/slide4.jpg"
  ],
].map(([num, title, text, img]) => (
      <div key={title} style={{
        background: "#0b1117",
        border: "1px solid #1f2937",
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(0,0,0,0.25)"
      }}>
        <img
          src={img}
          alt={title}
          style={{ width: "100%", height: 170, objectFit: "cover" }}
        />

        <div style={{ padding: 26 }}>
          <h3 style={{ color: "#c79a46", fontSize: 28, margin: 0 }}>{num}</h3>
          <h4 style={{ fontSize: 22, marginBottom: 10 }}>{title}</h4>
          <p style={{ color: "#cbd5e1", lineHeight: 1.6 }}>{text}</p>
        </div>
      </div>
    ))}
  </div>
</section>
      <section id="contact" style={{ padding: "80px 6%", background: "#f5f5f5" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", background: "white", padding: 40 }}>
          <h2 style={{ textAlign: "center" }}>Contact Us</h2>
          <p style={{ textAlign: "center" }}>Tell us about your project and we’ll get back to you.</p>

          <form action="https://formsubmit.co/hello@officedesignbuild.london" method="POST">
            <input type="hidden" name="_subject" value="New website enquiry" />
            <input name="name" placeholder="Your Name" required style={{ width: "100%", padding: 14, marginBottom: 14 }} />
            <input name="email" type="email" placeholder="Email Address" required style={{ width: "100%", padding: 14, marginBottom: 14 }} />
            <input name="phone" placeholder="Phone Number" style={{ width: "100%", padding: 14, marginBottom: 14 }} />
            <textarea name="message" placeholder="Tell us about your project" rows="6" required style={{ width: "100%", padding: 14, marginBottom: 14 }} />
            <button type="submit" style={{
              background: "#c79a46", color: "white", padding: "15px 24px",
              border: 0, width: "100%", fontWeight: "bold", cursor: "pointer"
            }}>
              Send Enquiry
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: 20 }}>
            Or call us directly: <strong>0208 252 9789</strong>
          </p>
        </div>
      </section>

      <footer style={{ background: "#05080c", color: "white", padding: "30px 6%", textAlign: "center" }}>
        © {new Date().getFullYear()} Workspace Design & Build London
      </footer>
    </main>
  );
}
