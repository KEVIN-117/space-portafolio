import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/modules/shared/background/StarBackround";
import { NavBar } from "@/modules/shared/Head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Porfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden mb-16`}>
        <NavBar />
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
