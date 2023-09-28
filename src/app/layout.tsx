import type { Metadata } from "next";
import { ReactNode } from "react";
import Theme from "@/components/Theme";

export const metadata: Metadata = { title: "Material UI" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
