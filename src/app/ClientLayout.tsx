'use client';

import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Ethereum, Polygon } from '@thirdweb-dev/chains';
import Navbar from './components/Navbar';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThirdwebProvider
      activeChain={Ethereum}
      supportedChains={[Ethereum, Polygon]}
    >
      <Navbar />
      {children}
    </ThirdwebProvider>
  );
}
