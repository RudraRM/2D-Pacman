import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pac-Man Game Website",
  description: "A retro arcade-themed Pac-Man game website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-arcade-black font-arcade text-arcade-white antialiased">
        {children}
      </body>
    </html>
  );
}
