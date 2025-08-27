import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HUD from "@/components/HUD";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Simonlinn.com — Pixel-perfect frontend portfolio",
  description: "Pixel-perfect frontend portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Press+Start+2P&family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-cabinet text-pixel">
        <div className="bg-grid bg-grid-size-grid min-h-dvh flex flex-col">
          <Header />
          <HUD />
          <div className="relative z-10 flex-grow mt-10">{children}</div>
          <Footer />
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
