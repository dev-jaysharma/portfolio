import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "portfolio-jay",
  description: "portfolio-jay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased dark:bg-neutral-950 bg-neutral-50"
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
