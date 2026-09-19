
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aarushiinfotechaiclasses.vercel.app/"),

  title: {
    default: "AI Classes | Aarushi Infotech",
    template: "%s | AI Classes",
  },

  description:
    "Master the power of AI with Aarushi Infotech AI Classes — learn AI, data handling, data analysis, content creation, business technology and more.",

  applicationName: "AI Classes",

  keywords: [
    "AI Classes",
    "Aarushi Infotech",
    "Artificial Intelligence",
    "AI Learning",
    "Data Analysis",
    "Data Handling",
    "Content Creation",
    "Business Technology",
    "Tally Prime",
  ],

  authors: [
    {
      name: "Aarushi Infotech",
    },
  ],

  creator: "Aarushi Infotech",

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    title: "AI Classes | Aarushi Infotech",
    description:
      "Master the power of AI with Aarushi Infotech AI Classes.",
    siteName: "AI Classes",
    images: [
      {
        url: "/images/IMG-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aarushi Infotech AI Classes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Classes | Aarushi Infotech",
    description:
      "Master the power of AI with Aarushi Infotech AI Classes.",
    images: ["/images/IMG-logo.jpeg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#050807",
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

