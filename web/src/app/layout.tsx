import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Slab } from "next/font/google";
import { Poppins } from "next/font/google";
import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner"

const robotoSlab = Roboto_Slab({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Term AI",
  description: "AI powered code editor in your browser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${robotoSlab.variable} dark`}
    >
      <body className={poppins.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
