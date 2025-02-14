'use client';

import ClientLayout from './ClientLayout';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="h-full w-full overflow-y-auto xl:overflow-hidden">
      <ClientLayout>
        <Hero />
      </ClientLayout>
    </div>
  );
}
