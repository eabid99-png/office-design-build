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
  animation: slide 16s infinite;
}

@keyframes slide {
  0% { background-image: url('/projects/whittington/IMG_1.JPEG'); }
  25% { background-image: url('/projects/whittington/IMG_2.JPEG'); }
  50% { background-image: url('/projects/whittington/IMG_3.JPEG'); }
  75% { background-image: url('/projects/whittington/IMG_4.JPEG'); }
  100% { background-image: url('/projects/whittington/IMG_1.JPEG'); }
}
`}</style>
    </html>
  );
}
