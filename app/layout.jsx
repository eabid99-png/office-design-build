export const metadata = {
  title: "Office Design & Build London",
  description: "Office fit out specialists in London",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
