export default function Home() {
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
        flexWrap: "wrap"
      }}>
        <img src="/logo.png" style={{ height: 85 }} />

        <div style={{ display: "flex", gap: 25 }}>
          <a href="#services" style={{ color: "white" }}>Services</a>
          <a href="#project" style={{ color: "white" }}>Projects</a>
          <a href="#process" style={{ color: "white" }}>Process</a>
          <a href="#contact" style={{ color: "white" }}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ height: "70vh", position: "relative" }}>
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
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "80px 6%" }}>
        <h2>Services</h2>
        <p>Glass partitions, ceilings, flooring, decorating & more.</p>
      </section>

      {/* PROJECT */}
      <section id="project" style={{ padding: "80px 6%", background: "#f5f5f5" }}>
        <h2>1 Whittington Avenue</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 10
        }}>
          {["IMG_1.JPEG","IMG_2.JPEG","IMG_3.JPEG","IMG_4.JPEG"].map(img => (
            <img key={img} src={`/projects/whittington/${img}`} style={{ width: "100%", height: 200, objectFit: "cover" }} />
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "80px 6%" }}>
        <h2>Process</h2>
        <p>Consultation → Design → Build → Completion</p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 6%", textAlign: "center" }}>
        <h2>Contact</h2>
        <p>0208 252 9789</p>
      </section>

    </main>
  );
}
