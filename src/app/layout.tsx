import type { Metadata, Viewport } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { ScrollProvider } from "@/providers/ScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  authors: [{ name: "Harsh", url: "https://github.com/codexharsh28" }],
  creator: "Harsh",
  other: {
    author: "Harsh",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-cinematic min-h-dvh font-body">
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
