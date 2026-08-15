import type { Metadata } from "next";
import { DynaPuff, Fredoka, Quicksand } from "next/font/google";
import "./globals.css";

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-dynapuff",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-fredoka",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Colour Ice Creams — Ice Cream & Lassi since 1998",
  description: "Playful, retro candy-shop ice cream & lassi parlour serving 40 flavours of nonsense in a candy-stripe cup since 1998.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased scroll-smooth ${dynaPuff.variable} ${fredoka.variable} ${quicksand.variable}`}>
      <head>
        <link
          rel="preload"
          href="/assets/hero_3d_cone_clean_transparent.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F6E7D3] text-[#3B2A1A] selection:bg-[#E15241] selection:text-white">
        {children}
      </body>
    </html>
  );
}

