export default function Home() {
  const images = [
    "IMG_1.JPEG",
    "IMG_2.JPEG",
    "IMG_3.JPEG",
    "IMG_4.JPEG",
  ];

  return (
    <main style={{ fontFamily: "'Montserrat', Arial, sans-serif", margin: 0 }}>

      {/* NAV */}
      <nav style={{
  background: "#05080c",
  color: "white",
  padding: "18px 6%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 20
}}>
  <a href="/" style={{ display: "flex", alignItems: "center" }}>
    <img src="/logo.png" alt="Workspace Design & Build" style={{ height: 90 }} />
  </a>

  <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
    <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>
    <a href="#project" style={{ color: "white", textDecoration: "none" }}>Projects</a>
    <a href="#process" style={{ color: "white", textDecoration: "none" }}>Process</a>
    <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>

    <a href="tel:02082529789" style={{
      background: "#c79a46",
      color: "white",
      padding: "11px 18px",
      textDecoration: "none",
      fontWeight: "bold"
    }}>
      0208 252 9789
    </a>
  </div>
</nav>

  {/* LOGO */}
  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
    <img src="/logo.png" style={{ height: 80 }} />
  </div>

  {/* MENU */}
  <div style={{
    display: "flex",
    gap: 25,
    alignItems: "center",
    flexWrap: "wrap"
  }}>

    <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>
    <a href="#project" style={{ color: "white", textDecoration: "none" }}>Projects</a>
    <a href="#process" style={{ color: "white", textDecoration: "none" }}>Process</a>
    <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>

    <a href="tel:02082529789" style={{
      background: "#c79a46",
      padding: "10px 16px",
      textDecoration: "none",
      color: "white"
    }}>
      0208 252 9789
    </a>

  </div>

</nav>
}}>

  {/* LOGO */}
  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
    <img
  src="/logo.png"
  alt="Workspace Design & Build London"
  style={{ height: 80 }}
/>
  </div>

  {/* PHONE */}
  <a href="tel:02082529789" style={{
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }}>
    0208 252 9789
  </a>

</nav>

      {/* HERO SLIDESHOW */}
      <section style={{ height: "70vh", position: "relative", overflow: "hidden" }}>
        <div className="hero-slide"></div>

        <div style={{
          position: "absolute",
          top: "50%",
          left: "6%",
          transform: "translateY(-50%)",
          color: "white"
        }}>
          <h1 style={{ fontSize: 60 }}>
            WORKSPACE DESIGN & BUILD<br />
            <span style={{ color: "#c79a46" }}>LONDON</span>
          </h1>
          <p>Professional office fit out & refurbishment across London</p>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "80px 6%" }}>
        <h2>Office Fit Out Company London</h2>
        <p>
          We provide full workspace design and build services across London.
          From initial concept to final delivery, we create modern,
          functional and high-quality working environments.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 6%", background: "#f5f5f5" }}>
        <h2>Our Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          {[
            "Glass Partitions",
            "Office Refurbishment",
            "Suspended Ceilings",
            "Flooring",
            "Decorating",
            "Doors & Joinery"
          ].map((s) => (
            <div key={s} style={{ background: "white", padding: 30 }}>
              <h3>{s}</h3>
              <p>Professional installation and high-quality finish.</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT */}
      <section style={{ padding: "80px 6%" }}>
        <h2>1 Whittington Avenue, London</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 10
        }}>
          {["IMG_1.JPEG","IMG_2.JPEG","IMG_3.JPEG","IMG_4.JPEG","IMG_5.JPEG","IMG_7.JPEG","IMG_8.JPEG","IMG_9.JPEG","IMG_10.JPEG","IMG_11.JPEG"].map((img) => (
            <img key={img} src={`/projects/whittington/${img}`} style={{ width: "100%", height: 200, objectFit: "cover" }} />
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "80px 6%", background: "#111", color: "white" }}>
        <h2>Our Process</h2>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
          <div>1. Consultation</div>
          <div>2. Design</div>
          <div>3. Build</div>
          <div>4. Completion</div>
        </div>
      </section>

      {/* CONTACT FORM */}
<section id="contact" style={{ padding: "80px 6%", background: "#f5f5f5" }}>
  <div style={{ maxWidth: 900, margin: "0 auto", background: "white", padding: 40, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
    <h2 style={{ textAlign: "center", marginBottom: 10 }}>Contact Us</h2>
    <p style={{ textAlign: "center", marginBottom: 30 }}>
      Tell us about your project and we’ll get back to you.
    </p>

    <form action="https://formsubmit.co/hello@officedesignbuild.london" method="POST">
      <input type="hidden" name="_subject" value="New website enquiry" />

      <input
        name="name"
        placeholder="Your Name"
        required
        style={{ width: "100%", padding: 14, marginBottom: 14 }}
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        style={{ width: "100%", padding: 14, marginBottom: 14 }}
      />

      <input
        name="phone"
        placeholder="Phone Number"
        style={{ width: "100%", padding: 14, marginBottom: 14 }}
      />

      <textarea
        name="message"
        placeholder="Tell us about your project"
        rows="6"
        required
        style={{ width: "100%", padding: 14, marginBottom: 14 }}
      />

      <button
        type="submit"
        style={{
          background: "#c79a46",
          color: "white",
          padding: "15px 24px",
          border: 0,
          width: "100%",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Send Enquiry
      </button>
    </form>

    <p style={{ textAlign: "center", marginTop: 20 }}>
      Or call us directly: <strong>0208 252 9789</strong>
    </p>
  </div>
</section>

    </main>
  );
}
