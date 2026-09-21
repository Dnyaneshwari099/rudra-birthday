import "./globals.css";

export const metadata = {
  title: "For Rudra ❤️",
  description: "A birthday surprise made with love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
