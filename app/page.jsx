export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>

      {/* HERO */}
      <section style={{ padding: "100px 20px", background: "#111827", color: "white", textAlign: "center" }}>
        <h1>Office Design & Build London</h1>
        <p>Office fit-out, refurbishment and workspace design specialists across London.</p>
        <a href="tel:02082529789" style={{ background: "#b88a44", color: "white", padding: "12px 20px", borderRadius: 6, textDecoration: "none" }}>
          Call 0208 252 9789
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Our Services</h2>
        <p>Office Design • Fit-Out & Refurbishment • Project Management</p>
      </section>

      {/* PROJECT FEATURE */}
      <section style={{ padding: "60px 20px", background: "#f3f4f6", textAlign: "center" }}>
        <h2>Featured Project</h2>
        <h3>1 Whittington Avenue, London</h3>
        <p>Complete office transformation delivering a modern, high-end workspace.</p>
      </section>

      {/* PROJECT GALLERY (PLACEHOLDER FOR YOUR 10 IMAGES) */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center" }}>Project Gallery</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px", marginTop: "20px" }}>
          {[1,2,3,4,5,6,7,8,9,10].map((img) => (
            <div key={img} style={{ height: "150px", background: "#ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>
              Image {img}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "60px 20px", background: "#111827", color: "white", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>Email: hello@officedesignbuild.london</p>
        <p>Phone: 0208 252 9789</p>
        <p>Location: London, UK</p>
      </section>

    </main>
  );
}
