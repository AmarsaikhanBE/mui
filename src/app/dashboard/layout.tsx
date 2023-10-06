import { ReactNode } from 'react';
import Layout from '@/components/dashboard/Layout';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession();

  if (!session) return redirect('/sign-in');

  return <Layout>{children}</Layout>;
}
