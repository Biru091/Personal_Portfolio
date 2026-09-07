import { Syne } from "next/font/google";

import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import { Syne_Mono } from "next/font/google";

const syneMono = Syne_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-syne-mono",
});

const syne = Syne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-syne",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syneMono.variable} ${syne.variable}`}>
        <SmoothScroll/>
        
        <Navbar/>
         
        {children}
      </body>
    </html>
  );
}