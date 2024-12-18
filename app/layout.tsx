import type { Metadata } from 'next';
import GitHubRibbon from './_components/GitHubRibbon';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Aspecta Realtime',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <GitHubRibbon />
      </body>
    </html>
  );
}
