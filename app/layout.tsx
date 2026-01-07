import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steps Component Demo",
  description: "Demo of the Steps component",
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

