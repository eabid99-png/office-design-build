export default function Home() {
const services = [
  {
    title: "Office Fit Out",
    text: "Modern office environments designed for productivity and brand impact.",
    icon: "▧",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Commercial Interiors",
    text: "Reception areas, meeting rooms and client-facing spaces built to impress.",
    icon: "✎",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Industrial Fit Out",
    text: "Warehouse, workshop and industrial unit fit outs built for performance.",
    icon: "◴",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Warehouse Offices",
    text: "Office and mezzanine builds inside industrial environments.",
    icon: "▣",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80",
  },
];

  const projects = [
    "1 Whittington Avenue",
    "Corporate Workspace",
    "Meeting Suite",
    "Breakout Area",
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0, color: "#111827", background: "#ffffff" }}>
      <nav style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(8,13,18,0.96)", color: "white", padding: "18px 6%", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 38, height: 38, border: "2px solid #c79a46", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>OD</div>
          <strong style={{ letterSpacing: 1 }}>OFFICE DESIGN & BUILD</strong>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 13, fontWeight: 700 }}>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>SERVICES</a>
          <a href="#projects" style={{ color: "white", textDecoration: "none" }}>PROJECTS</a>
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>ABOUT</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>CONTACT</a>
        </div>
      </nav>

      <section style={{ minHeight: "78vh", padding: "90px 6%", color: "white", background: "linear-gradient(90deg, rgba(0,0,0,0.88), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80') center/cover", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: 720 }}>
          <p style={{ color: "#c79a46", fontWeight: 800, letterSpacing: 2, marginBottom: 12 }}>LONDON OFFICE FIT OUT SPECIALISTS</p>
          <h1 style={{ fontSize: "clamp(42px, 7vw, 82px)", lineHeight: 0.95, margin: 0, fontWeight: 900 }}>
            OFFICE FIT OUT<br /><span style={{ color: "#c79a46" }}>LONDON</span>
          </h1>
          <p style={{ fontSize: 22, lineHeight: 1.45, marginTop: 24, maxWidth: 620 }}>
            We design and build exceptional workspaces that inspire people, improve productivity and reflect your brand.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}>
            <a href="#services" style={{ background: "#c79a46", color: "white", padding: "15px 24px", borderRadius: 4, textDecoration: "none", fontWeight: 800 }}>OUR SERVICES</a>
            <a href="#projects" style={{ border: "1px solid white", color: "white", padding: "15px 24px", borderRadius: 4, textDecoration: "none", fontWeight: 800 }}>VIEW PROJECTS</a>
          </div>
        </div>
      </section>

      <section style={{ background: "#0b1117", color: "white", padding: "28px 6%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20 }}>
        {["End-to-End Service", "London Experts", "On Time, On Budget", "Sustainable Design"].map((item) => (
          <div key={item}>
            <strong style={{ color: "#c79a46" }}>✓</strong> <strong>{item}</strong>
            <p style={{ margin: "6px 0 0", color: "#cbd5e1", fontSize: 14 }}>Reliable delivery from concept to completion.</p>
          </div>
        ))}
      </section>

      <section id="services" style={{ padding: "80px 6%", textAlign: "center" }}>
        <p style={{ color: "#c79a46", fontWeight: 800, letterSpacing: 1 }}>OUR SERVICES</p>
        <h2 style={{ fontSize: 38, marginTop: 8 }}>Complete Office Fit Out Solutions</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 28, marginTop: 42, textAlign: "left" }}>
          {services.map((s) => (
            <article key={s.title} style={{ background: "white", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
              <div style={{ height: 150, background: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80') center/cover" }} />
              <div style={{ padding: 24 }}>
                <div style={{ width: 46, height: 46, border: "1px solid #c79a46", color: "#c79a46", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 18 }}>{s.icon}</div>
                <h3 style={{ margin: "0 0 10px", fontSize: 21 }}>{s.title}</h3>
                <p style={{ color: "#4b5563", lineHeight: 1.6 }}>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
<section id="fit-out-types" style={{ padding: "80px 6%", background: "#f8fafc", textAlign: "center" }}>
  <p style={{ color: "#c79a46", fontWeight: 800 }}>FIT OUT TYPES</p>
  <h2 style={{ fontSize: 38, marginTop: 8 }}>Office & Industrial Fit Out Services</h2>
  <p style={{ maxWidth: 760, margin: "0 auto 40px", color: "#4b5563", lineHeight: 1.7 }}>
    We deliver practical, high-quality fit out solutions for commercial offices, industrial units and specialist working environments across London and the surrounding areas.
  </p>

  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, textAlign: "left" }}>
    {[
      {
        title: "CAT A Fit Out",
        text: "Landlord-ready spaces including ceilings, lighting, flooring, decoration and basic services."
      },
      {
        title: "CAT B Fit Out",
        text: "Fully finished workspaces tailored to the occupier, including meeting rooms, kitchens, furniture and branding."
      },
      {
        title: "Office Refurbishment",
        text: "Modernising existing offices to improve appearance, layout, comfort and performance."
      },
      {
        title: "Design & Build",
        text: "A complete service from initial concept and space planning through to construction and handover."
      },
      {
        title: "Industrial Unit Fit Out",
        text: "Practical fit out works for warehouses, workshops, trade counters and light industrial spaces."
      },
      {
        title: "Mezzanine Offices",
        text: "Creating additional office, storage or production space within industrial buildings."
      },
      {
        title: "Warehouse Office Build",
        text: "Internal office construction within warehouse and logistics environments."
      },
      {
        title: "Dilapidations & Strip Out",
        text: "End-of-lease strip out, reinstatement and repair works for commercial and industrial properties."
      }
    ].map((item) => (
      <div key={item.title} style={{ background: "white", padding: 24, borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
        <h3 style={{ marginTop: 0 }}>{item.title}</h3>
        <p style={{ color: "#4b5563", lineHeight: 1.6 }}>{item.text}</p>
      </div>
    ))}
  </div>
</section>
      <section style={{ background: "#0b1117", color: "white", padding: "38px 6%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 20, textAlign: "center" }}>
        {["10+ Years Experience", "250+ Projects Completed", "1M+ Sq Ft Delivered", "98% Client Satisfaction"].map((stat) => (
          <strong key={stat} style={{ fontSize: 22, color: "#c79a46" }}>{stat}</strong>
        ))}
      </section>

      <section id="projects" style={{ padding: "80px 6%", background: "#f8fafc", textAlign: "center" }}>
        <p style={{ color: "#c79a46", fontWeight: 800, letterSpacing: 1 }}>OUR WORK</p>
        <h2 style={{ fontSize: 38, marginTop: 8 }}>Recent Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 24, marginTop: 38, textAlign: "left" }}>
          {projects.map((p) => (
            <article key={p} style={{ background: "white", borderRadius: 10, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
              <div style={{ height: 150, background: "url('https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=900&q=80') center/cover" }} />
              <div style={{ padding: 18 }}>
                <h3 style={{ margin: "0 0 4px" }}>{p}</h3>
                <p style={{ margin: 0, color: "#6b7280" }}>London</p>
                <a href="#whittington" style={{ display: "inline-block", marginTop: 12, color: "#b88735", textDecoration: "none", fontWeight: 700 }}>View Project →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="whittington" style={{ padding: "80px 6%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 36, alignItems: "center" }}>
          <div>
            <p style={{ color: "#c79a46", fontWeight: 800 }}>FEATURED PROJECT</p>
            <h2 style={{ fontSize: 38, marginTop: 8 }}>1 Whittington Avenue, London</h2>
            <p style={{ color: "#4b5563", lineHeight: 1.7, fontSize: 17 }}>
              A complete office transformation designed to create a refined, practical and modern working environment. This project will include your best 10 project images once uploaded into the site.
            </p>
            <ul style={{ lineHeight: 2, color: "#374151", paddingLeft: 20 }}>
              <li>End-to-end design and build</li>
              <li>Modern workspace planning</li>
              <li>High-quality finishes and furniture</li>
              <li>Delivered for a London commercial client</li>
            </ul>
          </div>
          <div style={{ height: 360, borderRadius: 14, background: "url('https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=1200&q=80') center/cover", boxShadow: "0 15px 35px rgba(0,0,0,0.18)" }} />
        </div>
        <div style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "12px",
  marginTop: "20px"
}}>
  {["IMG_1.JPEG","IMG_2.JPEG","IMG_3.JPEG","IMG_4.JPEG","IMG_5.JPEG","IMG_7.JPEG","IMG_8.JPEG","IMG_9.JPEG","IMG_10.JPEG","IMG_11.JPEG"].map((img, i) => (
    <img
      key={i}
      src={`/projects/whittington/${img}`}
      alt={`1 Whittington Avenue project ${i + 1}`}
      style={{
        width: "100%",
        height: "220px",
        objectFit: "cover",
        borderRadius: "8px"
      }}
    />
  ))}
</div>
      

      </section>

      <section id="about" style={{ padding: "80px 6%", background: "#f8fafc" }}>
        <div style={{ maxWidth: 900 }}>
          <p style={{ color: "#c79a46", fontWeight: 800 }}>ABOUT US</p>
          <h2 style={{ fontSize: 38, marginTop: 8 }}>London Office Fit Out Specialists</h2>
          <p style={{ color: "#4b5563", lineHeight: 1.75, fontSize: 18 }}>
            Office Design & Build is a London-based office fit out and interior design company. We create inspiring workplaces that help businesses attract talent, encourage collaboration and make better use of their space.
          </p>
        </div>
      </section>

      <section id="contact" style={{ padding: "70px 6%", background: "#0b1117", color: "white", textAlign: "center" }}>
        <h2 style={{ fontSize: 34 }}>Ready to create your perfect workspace?</h2>
        <p>Let’s talk about your project.</p>
        <a href="tel:02082529789" style={{ display: "inline-block", background: "#c79a46", color: "white", padding: "14px 24px", borderRadius: 4, textDecoration: "none", fontWeight: 800, marginTop: 12 }}>CALL 0208 252 9789</a>
        <p style={{ marginTop: 24 }}>hello@officedesignbuild.london</p>
      </section>

      <footer style={{ padding: "30px 6%", background: "#080d12", color: "#cbd5e1", display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
        <strong style={{ color: "white" }}>OFFICE DESIGN & BUILD</strong>
        <span>© {new Date().getFullYear()} Office Design & Build. All rights reserved.</span>
      </footer>
    </main>
  );
}
