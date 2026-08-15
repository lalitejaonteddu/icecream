import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colour Ice Creams — Ice Cream & Lassi since 1998",
  description: "Playful, retro candy-shop ice cream & lassi parlour serving 40 flavours of nonsense in a candy-stripe cup since 1998.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#FFFDF0] text-[#2C1609] selection:bg-[#FF1493] selection:text-white">
        {children}
      </body>
    </html>
  );
}

