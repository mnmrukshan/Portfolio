import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Rukshan | Software Engineer Portfolio",
  description: "Personal portfolio of Mohamed Rukshan, a 3rd-year Software Engineering Undergraduate building modern full-stack systems.",
  keywords: ["Software Engineer", "Portfolio", "Mohamed Rukshan", "Next.js", "Full Stack Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-gradient-animate min-h-screen selection:bg-primary/30`}>
        {children}
      </body>
    </html>
  );
}

