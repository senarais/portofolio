import type { Metadata } from "next";
import { Fredoka } from 'next/font/google'
import "./globals.css";


const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fredoka',
})

export const metadata: Metadata = {
  title: "sena's property",
  description: "this is sena's property",
  icons: {
    icon: "/icon.png",       // favicon default
    apple: "/icon.png",      // icon untuk iOS
    shortcut: "/icon.png",   // shortcut icon (Windows)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${fredoka.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
