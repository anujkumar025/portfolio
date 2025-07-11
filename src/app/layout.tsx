import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
import { ThemeTransition } from "@/components/ThemeTransition";
import ClickSpark from "@/components/ui/clickSpark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anuj Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/circle-profile.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          {/* <ThemeProvider 
              attribute="class"
              defaultTheme="light" 
              enableSystem
              disableTransitionOnChange
          > */}
          <ThemeTransition>{children}</ThemeTransition>
          {/* </ThemeProvider> */}
        </ClickSpark>
      </body>
    </html>
  );
}
