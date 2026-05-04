export default function Home() {
  const services = [
    {
      title: "Workspace Planning",
      text: "Intelligent layouts that maximise space, improve flow and create better places to work.",
      img: "IMG_1.JPEG",
    },
    {
      title: "Interior Design",
      text: "Refined workplace interiors designed around your brand, culture and client experience.",
      img: "IMG_2.JPEG",
    },
    {
      title: "Design & Build",
      text: "A complete workspace delivery service, from concept and specification to final handover.",
      img: "IMG_3.JPEG",
    },
    {
      title: "Furniture & Finishes",
      text: "Quality furniture, lighting, finishes and details that give your workplace a premium finish.",
      img: "IMG_4.JPEG",
    },
  ];

  const images = [
    "IMG_1.JPEG",
    "IMG_2.JPEG",
    "IMG_3.JPEG",
    "IMG_4.JPEG",
    "IMG_5.JPEG",
    "IMG_7.JPEG",
    "IMG_8.JPEG",
    "IMG_9.JPEG",
    "IMG_10.JPEG",
    "IMG_11.JPEG",
  ];

  const font = "'Montserrat', 'Avenir Next', 'Helvetica Neue', Arial, sans-serif";

  return (
    <main style={{ fontFamily: font, margin: 0, color: "#111827", background: "#ffffff" }}>
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(5, 8, 12, 0.96)", color: "white", padding: "16px 6%", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(199,154,70,0.24)", flexWrap: "wrap", gap: 18 }}>
        <a href="#home" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: 16 }}>
          <img src="/logo.png" alt="Workspace Design & Build London logo" style={{ height: 56, width: "auto", objectFit: "contain" }} />
          <div style={{ lineHeight: 1.05 }}>
            <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: 6 }}>WORKSPACE</div>
            <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: 5, color: "#c79a46", marginTop: 4 }}>DESIGN & BUILD</div>
            <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: 5, marginTop: 6 }}>LONDON</div>
          </div>
        </a>

        <div style={{ display: "flex", gap: 26, alignItems: "center", fontSize: 12, fontWeight: 700, letterSpacing: 1.6, flexWrap: "wrap" }}>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>SERVICES</a>
          <a href="#project" style={{ color: "white", textDecoration: "none" }}>PROJECT</a>
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>ABOUT</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>CONTACT</a>
          <a href="tel:02082529789" style={{ background: "linear-gradient(135deg, #d8b35c, #9d722c)", color: "white", padding: "13px 20px", borderRadius: 3, textDecoration: "none", letterSpacing: 1.2 }}>GET A QUOTE</a>
        </div>
     <img 
  src="/logo.png" 
  alt="Workspace Design & Build London"
  style={{ height: 60 }}
/>

      <section id="home" style={{ minHeight: "82vh", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", background: "#05080c", color: "white" }}>
        <div style={{ padding: "90px 8%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ color: "#c79a46", fontWeight: 500, letterSpacing: 4, marginBottom: 18 }}>LONDON WORKSPACE DESIGN & BUILD SPECIALISTS</p>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 78px)", lineHeight: 1.02, margin: 0, fontWeight: 500, letterSpacing: 8 }}>
            WORKSPACE<br />DESIGN & BUILD<br /><span style={{ color: "#c79a46" }}>LONDON</span>
          </h1>
          <p style={{ fontSize: 20, lineHeight: 1.65, marginTop: 28, color: "#e5e7eb", maxWidth: 680, letterSpacing: 0.4 }}>
            We design and deliver high-quality workspace environments across London, combining intelligent planning, refined interiors and professional build execution.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
            <a href="#project" style={{ background: "linear-gradient(135deg, #d8b35c, #9d722c)", color: "white", padding: "16px 26px", borderRadius: 3, textDecoration: "none", fontWeight: 700, letterSpacing: 1.4 }}>VIEW OUR WORK</a>
            <a href="tel:02082529789" style={{ border: "1px solid rgba(255,255,255,0.7)", color: "white", padding: "16px 26px", borderRadius: 3, textDecoration: "none", fontWeight: 700, letterSpacing: 1.4 }}>CALL 0208 252 9789</a>
          </div>
        </div>
        <div style={{ minHeight: 520, background: "linear-gradient(90deg, rgba(5,8,12,0.25), rgba(5,8,12,0.05)), url('/projects/whittington/IMG_1.JPEG') center/cover" }} />
      </section>

      <section style={{ background: "#080d12", color: "white", padding: "30px 6%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24, borderTop: "1px solid rgba(199,154,70,0.25)", borderBottom: "1px solid rgba(199,154,70,0.25)" }}>
        {["Bespoke Design", "Expert Build", "Reliable Delivery", "London Focused"].map((item) => (
          <div key={item} style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <span style={{ color: "#c79a46", fontSize: 20 }}>◆</span>
            <strong style={{ letterSpacing: 2, fontWeight: 500 }}>{item.toUpperCase()}</strong>
          </div>
        ))}
      </section>

      <section id="services" style={{ padding: "90px 6%", background: "#ffffff", textAlign: "center" }}>
        <p style={{ color: "#c79a46", fontWeight: 600, letterSpacing: 3 }}>OUR SERVICES</p>
        <h2 style={{ fontSize: "clamp(30px, 4vw, 46px)", margin: "10px 0 14px", fontWeight: 500, letterSpacing: 1.5 }}>Complete Workspace Design & Build Solutions</h2>
        <p style={{ maxWidth: 780, margin: "0 auto", color: "#4b5563", fontSize: 18, lineHeight: 1.8 }}>
          A professional service for businesses that want their workplace to look impressive, work efficiently and be delivered with care.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(245px, 1fr))", gap: 28, marginTop: 46, textAlign: "left" }}>
          {services.map((s) => (
            <article key={s.title} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 2, overflow: "hidden", boxShadow: "0 16px 35px rgba(0,0,0,0.08)" }}>
              <div style={{ height: 185, background: `url('/projects/whittington/${s.img}') center/cover` }} />
              <div style={{ padding: 25 }}>
                <h3 style={{ fontSize: 21, margin: "0 0 10px", fontWeight: 600, letterSpacing: 1 }}>{s.title}</h3>
                <p style={{ color: "#4b5563", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="project" style={{ padding: "90px 6%", background: "#f8fafc" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 42, alignItems: "center" }}>
          <div>
            <p style={{ color: "#c79a46", fontWeight: 600, letterSpacing: 3 }}>FEATURED PROJECT</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: "10px 0 18px", fontWeight: 500, letterSpacing: 1.5 }}>1 Whittington Avenue, London</h2>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: 18 }}>
              A complete workspace transformation focused on practical planning, modern finishes and a refined professional environment.
            </p>
            <ul style={{ lineHeight: 2.1, color: "#374151", paddingLeft: 20, fontSize: 16 }}>
              <li>Workspace design and refurbishment works</li>
              <li>Modern layout and workspace improvement</li>
              <li>Quality finishes, furniture and detail work</li>
              <li>Delivered for a London commercial workspace</li>
            </ul>
          </div>
          <div style={{ height: 420, borderRadius: 2, background: "url('/projects/whittington/IMG_10.JPEG') center/cover", boxShadow: "0 22px 50px rgba(0,0,0,0.2)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 14, marginTop: 42 }}>
          {images.map((img, i) => (
            <img key={img} src={`/projects/whittington/${img}`} alt={`1 Whittington Avenue London workspace design and build ${i + 1}`} style={{ width: "100%", height: i === 0 ? 300 : 220, objectFit: "cover", borderRadius: 2, boxShadow: "0 10px 25px rgba(0,0,0,0.12)", gridColumn: i === 0 ? "span 2" : "auto" }} />
          ))}
        </div>
      </section>

      <section id="about" style={{ padding: "90px 6%", background: "white" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 42, alignItems: "center" }}>
          <div style={{ height: 420, borderRadius: 2, background: "url('/projects/whittington/IMG_11.JPEG') center/cover", boxShadow: "0 22px 50px rgba(0,0,0,0.16)" }} />
          <div>
            <p style={{ color: "#c79a46", fontWeight: 600, letterSpacing: 3 }}>ABOUT US</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 46px)", margin: "10px 0 18px", fontWeight: 500, letterSpacing: 1.5 }}>London Workspace Design & Build Specialists</h2>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: 18 }}>
              Workspace Design & Build creates professional interiors for businesses across London. We focus on clear communication, quality workmanship and spaces that make a strong first impression.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "80px 6%", background: "#080d12", color: "white", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 46px)", margin: 0, fontWeight: 500, letterSpacing: 1.6 }}>Ready to create your perfect workspace?</h2>
        <p style={{ color: "#cbd5e1", fontSize: 18 }}>Talk to us about your workspace design and build project.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginTop: 28 }}>
          <a href="tel:02082529789" style={{ background: "linear-gradient(135deg, #d8b35c, #9d722c)", color: "white", padding: "15px 24px", borderRadius: 3, textDecoration: "none", fontWeight: 700, letterSpacing: 1.4 }}>CALL 0208 252 9789</a>
          <a href="mailto:hello@officedesignbuild.london" style={{ border: "1px solid rgba(255,255,255,0.5)", color: "white", padding: "15px 24px", borderRadius: 3, textDecoration: "none", fontWeight: 700, letterSpacing: 1.4 }}>EMAIL US</a>
        </div>
        <p style={{ marginTop: 26, letterSpacing: 1.2 }}>hello@officedesignbuild.london</p>
      </section>

      <footer style={{ padding: "32px 6%", background: "#05080c", color: "#cbd5e1", display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap", letterSpacing: 1 }}>
        <strong style={{ color: "white", fontWeight: 500 }}>WORKSPACE DESIGN & BUILD LONDON</strong>
        <span>© {new Date().getFullYear()} Workspace Design & Build. All rights reserved.</span>
      </footer>
    </main>
  );
}
