import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairSerif = Playfair_Display({
  variable: "--font-playfair-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "Moon",
  description: "An interactive moon phase model.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
