import Copyright from "@/components/Copyright";
import { Stack } from "@mui/material";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Stack minHeight="100vh" width="100%" justifyContent="space-between">
      {children}
      <Copyright />
    </Stack>
  );
}
