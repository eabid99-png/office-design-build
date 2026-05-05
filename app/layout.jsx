export const metadata = {
  title: "Workspace Design & Build London",
  description: "Workspace design and build specialists in London",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <style>{`
          .hero-slide {
            height: 100%;
            width: 100%;
            background-size: cover;
            background-position: center;
            animation: slider 20s infinite;
          }

          @keyframes slider {
            0% { background-image: url('/slide1.jpg'); }
            25% { background-image: url('/slide2.jpg'); }
            50% { background-image: url('/slide3.jpg'); }
            75% { background-image: url('/slide4.jpg'); }
            100% { background-image: url('/slide1.jpg'); }
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
