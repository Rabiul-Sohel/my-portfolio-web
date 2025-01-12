import { Geist, Geist_Mono, Inter, Oswald, Poppins, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";

import Footer from "@/Components/Shared/Footer";
import ScrollToTop from "@/Components/Shared/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rabiul Sohel",
  description: "An Web developer",
};
const inter = Poppins({ subsets: ['latin'], weight: ['100', '300', '500', '600', '800'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${inter.className}  antialiased bg-[#01121b] text-white selection:bg-gold selection:text-black`}
      >
        <div className="">
          <Navbar />
        </div>
        <div className="container mx-auto">

          {children}
        </div>
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
