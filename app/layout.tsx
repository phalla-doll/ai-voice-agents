import type { Metadata } from "next";
import "./globals.css"; // Global styles

export const metadata: Metadata = {
  title: "AI Voice Agents",
  description:
    "The All-In-One Platform For Voice AI Agents And Everything Audio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&f[]=satoshi@900,700,500,300,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-[#050505] text-white font-satoshi antialiased selection:bg-[#7FFF00] selection:text-black"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
