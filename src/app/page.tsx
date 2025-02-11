'use client';

import ClientLayout from './ClientLayout';
import Hero from './components/Hero';

export default function Home() {
  return (
    <ClientLayout>
      <div className="w-full">
        <Hero />
      </div>
    </ClientLayout>
  );
}
