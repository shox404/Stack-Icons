import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Stack Icons - Tech Svg Icons",
    description: "A collection of high-quality icons for tech and web enthusiasts.",
    keywords: ["tech icons", "web development", "SVG icons", "dark icons", "light icons", "icons", "stack", "tech", "svg"],
    authors: [
        { name: "Shoxruh", url: "https://shx404.vercel.app" }
    ],
    creator: "Shoxruh",
    openGraph: {
        title: "Stack Icons - High-Quality Tech Icons",
        description: "Discover a curated collection of icons for technology, web, and devices. Perfect for developers and designers.",
        siteName: "Stack Icons",
        images: [
            {
                url: "https://www.yourwebsite.com/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Stack Icons preview image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    themeColor: "#1e1e1e",
    applicationName: "Stack Icons",
    category: "icons",
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-theme="retro">
        {children}
      </body>
    </html>
  );
}
