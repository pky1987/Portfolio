'use client';

import dynamic from 'next/dynamic';

// Dynamically import Contact with SSR disabled to avoid hydration mismatch
const Contact = dynamic(() => import('./Contact'), {
  ssr: false,
});

export default function ContactWrapper() {
  return <Contact />;
}
