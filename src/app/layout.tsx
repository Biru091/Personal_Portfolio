import { Geist } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <SmoothScroll/>
        <Navbar/>
         
        {children}
      </body>
    </html>
  );
}