import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Classes",
  description: "Aarushi Infotech AI Classes",
  icons: {
    icon: "/images/IMG-logo.jpeg",
    shortcut: "/images/IMG-logo.jpeg",
    apple: "/images/IMG-logo.jpeg",
  },
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