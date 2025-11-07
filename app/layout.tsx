import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innoclick",
  description: "Created with v0",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo-icon.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo-icon.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo-icon.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo-icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
