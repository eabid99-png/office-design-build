export const metadata = {
  title: "Office Design & Build London",
  description: "Office fit out specialists in London",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
<style>{`
.hero-slide {
  height: 100%;
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
    </html>
  );
}
