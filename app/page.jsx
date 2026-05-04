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
        flexWrap: "wrap",
        gap: 20
      }}>
        <img src="/logo.png" style={{ height: 85 }} />

        <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontSize: 14 }}>
          <a href="#glass" style={{ color: "white" }}>Glass</a>
          <a href="#refurb" style={{ color: "white" }}>Refurb</a>
          <a href="#ceilings" style={{ color: "white" }}>Ceilings</a>
          <a href="#flooring" style={{ color: "white" }}>Flooring</a>
          <a href="#decorating" style={{ color: "white" }}>Decorating</a>
          <a href="#joinery" style={{ color: "white" }}>Joinery</a>
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
      <section style={{ padding: "80px 6%", background: "#f5f5f5" }}>
        <h2>Our Services</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20
        }}>

          <div id="glass" style={{ background: "white", padding: 30 }}>
            <h3>Glass Partitions</h3>
            <p>Professional installation and high-quality finish.</p>
          </div>

          <div id="refurb" style={{ background: "white", padding: 30 }}>
            <h3>Office Refurbishment</h3>
            <p>Professional installation and high-quality finish.</p>
          </div>

          <div id="ceilings" style={{ background: "white", padding: 30 }}>
            <h3>Suspended Ceilings</h3>
            <p>Professional installation and high-quality finish.</p>
          </div>

          <div id="flooring" style={{ background: "white", padding: 30 }}>
            <h3>Flooring</h3>
            <p>Professional installation and high-quality finish.</p>
          </div>

          <div id="decorating" style={{ background: "white", padding: 30 }}>
            <h3>Decorating</h3>
            <p>Professional installation and high-quality finish.</p>
          </div>

          <div id="joinery" style={{ background: "white", padding: 30 }}>
            <h3>Doors & Joinery</h3>
            <p>Professional installation and high-quality finish.</p>
          </div>

        </div>
      </section>

      {/* PROJECT */}
      <section style={{ padding: "80px 6%" }}>
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
      <section style={{ padding: "80px 6%", background: "#111", color: "white" }}>
        <h2>Our Process</h2>
        <p>Consultation → Design → Build → Completion</p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "80px 6%", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>Call: 0208 252 9789</p>
      </section>

    </main>
  );
}
