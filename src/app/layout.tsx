import { Syne } from "next/font/google";

import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";


const syne = Syne({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <SmoothScroll/>
        
        <Navbar/>
         
        {children}
      </body>
    </html>
  );
}