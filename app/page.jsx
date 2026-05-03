export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
      <section style={{ padding: "100px 24px", background: "#111827", color: "white", textAlign: "center" }}>
        <h1>Office Design & Build London</h1>
        <p>Office fit-out, refurbishment and workspace design specialists across London.</p>
        <a href="tel:02082529789" style={{ color: "white", background: "#b88a44", padding: "12px 20px", textDecoration: "none", borderRadius: 6 }}>
          Call 0208 252 9789
        </a>
      </section>

      <section style={{ padding: "60px 24px", textAlign: "center" }}>
        <h2>Our Services</h2>
        <p>Office Design • Fit-Out & Refurbishment • Project Management</p>
      </section>

      <section style={{ padding: "60px 24px", background: "#f3f4f6", textAlign: "center" }}>
        <h2>Project: 1 Whittington Avenue, London</h2>
        <p>A dedicated project page/gallery will be added here with your best 10 photos.</p>
      </section>

      <section style={{ padding: "60px 24px", background: "#111827", color: "white", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>Email: hello@officedesignbuild.london</p>
        <p>Phone: 0208 252 9789</p>
        <p>Location: London, UK</p>
      </section>
    </main>
  );
}
