import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahipal Rajpurohit | Software Developer & Tech Enthusiast",
  description: "Explore the portfolio of Mahipal Rajpurohit, a software developer passionate about backend development, DevOps, and IoT. Check out projects, blogs, and artwork.",
  icons: {
    icon: '/icon.png', // /public path
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Arbutus+Slab&family=Bebas+Neue&family=Berkshire+Swash&family=Oswald:wght@200..700&family=Pacifico&display=swap&family=Sacramento&display=swap&family=Raleway&display=swap&family=Merienda:wght@300..900&display=swap&family=Lobster&display=swap&family=Unbounded&display=swap&family=Great+Vibes&family=Playfair+Display&display=swap" 
      rel="stylesheet"/>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-22Y15GT22M"></Script>
      <Script>
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-22Y15GT22M');`
        }
      </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden overscroll-x-none text-white bg-[#121212]`}
      >
        {children}
      </body>
    </html>
  );
}
