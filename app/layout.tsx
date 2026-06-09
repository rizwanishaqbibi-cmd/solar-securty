import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-geist-serif",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Smart Solar & Security Solutions - Premium Solar & CCTV in Islamabad",
  description: "Empowering homes and businesses in Islamabad and Rawalpindi with reliable solar energy installations, hybrid inverters, battery storage, and HD CCTV camera networks. Founded by Irfan Ahmad since 2010.",
  keywords: "Solar energy Islamabad, Security systems Pakistan, CCTV cameras Islamabad, Hybrid solar inverter, Lithium battery backup, Net metering Pakistan, Irfan Ahmad solar",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans transition-colors duration-300">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
