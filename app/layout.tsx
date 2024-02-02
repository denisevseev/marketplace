import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";


export const metadata: Metadata = {
  title: "Victorum marketplace",
  description: "Viktorum marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <ThemeRegistry>
      <body>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
