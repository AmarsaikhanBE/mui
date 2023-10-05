import { ReactNode } from "react";
import Layout from "@/components/dashboard/Layout";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}
