import type { Metadata } from "next";
import "./globals.css";
import '@/public/fonts/inter.css'

export const metadata: Metadata = {
  title: "Fianarana",
  description: "Application qui propose des livres",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='antialiased relative font-inter'>
        {children}
      </body>
    </html>
  );
}
