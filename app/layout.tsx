import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Ranktify",
   description: "Rank your music. Share your taste.",
   generator: "Next.js",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
