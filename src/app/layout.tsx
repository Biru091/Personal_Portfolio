import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
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
        <Navbar/>
        {children}
      </body>
    </html>
  );
}