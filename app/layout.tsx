
import type { Metadata } from "next";
import Footer from "./components/footer/Footer";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

import { Kanit } from "next/font/google";
const kanit = Kanit({
  weight: ["300", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickCV",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={kanit.className}>
        <div className="w-full  fixed top-0 z-20">
          <Navbar />
        </div>

        <main className="p-[3%]">
          <ChakraProvider>{children}</ChakraProvider>
        </main>

        <div className="w-full flex justify-center align-bottom">
          <Footer />
        </div>
      </body>
    </html>
  );
}
