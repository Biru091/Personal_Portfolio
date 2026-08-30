import { Geist } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
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
          {/* <video
          className="fixed inset-0 -z-10 h-screen w-screen object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video> */}
        {children}
      </body>
    </html>
  );
}