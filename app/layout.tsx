import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Malitha Sadaru",
  description: "Minimalist portfolio. Python, AI, Arch Linux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased bg-white dark:bg-[#050505] text-black dark:text-white`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}