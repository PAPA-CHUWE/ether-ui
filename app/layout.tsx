import type { Metadata } from "next";
import { Geist, Geist_Mono, Viga } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AOSProvider from "@/components/layout/AOSProvider";
import LenisProvider from "@/components/layout/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const viga = Viga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-viga",
});

export const metadata: Metadata = {
  title: "EtherUI",
  description: "Next-gen glass UI system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${viga.variable} antialiased`}
      >
        <LenisProvider>

          {children}
          <AOSProvider />
        </LenisProvider>


      </body>
    </html>
  );
}
