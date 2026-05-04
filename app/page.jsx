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
  alignItems: "center"
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

      {/* CONTACT */}
      <section style={{ padding: "80px 6%", textAlign: "center" }}>
        <h2>Get a Quote</h2>
        <p>Call us today on 0208 252 9789</p>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#05080c", color: "white", padding: "30px 6%" }}>
        © Workspace Design & Build London
      </footer>

    </main>
  );
}
