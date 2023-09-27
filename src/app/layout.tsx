import type { Metadata } from "next";
import { ReactNode } from "react";
import { Nunito } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";

const font = Nunito({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Material UI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
