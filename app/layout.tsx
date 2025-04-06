import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clima | Real-time Weather Forecast & Air Quality",
  description:
    "Get accurate real-time weather forecasts, air quality data, UV index, and detailed meteorological information for cities worldwide. Built with Next.js and TailwindCSS.",
  keywords:
    "weather app, weather forecast, air quality, UV index, real-time weather, climate data, meteorological information"};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
