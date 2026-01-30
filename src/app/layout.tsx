import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VELO™ Prototype',
  description: 'Live Event Inventory Liquidity Engine',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
