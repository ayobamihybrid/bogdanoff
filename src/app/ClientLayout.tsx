'use client';

import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Ethereum, Polygon } from '@thirdweb-dev/chains';
import Navbar from './components/Navbar';
import { usePathname } from 'next/navigation';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isNonScrollablePage = pathname === '/' || pathname === '/chatbot';

  return (
    <ThirdwebProvider
      activeChain={Ethereum}
      supportedChains={[Ethereum, Polygon]}
    >
      <div
        className={`flex flex-col ${
          isNonScrollablePage ? 'min-h-screen xl:h-full' : 'min-h-screen'
        }`}
      >
        <Navbar />
        <main
          className={`flex-1 ${
            isNonScrollablePage ? 'xl:overflow-hidden' : ''
          }`}
        >
          {children}
        </main>
      </div>
    </ThirdwebProvider>
  );
}
