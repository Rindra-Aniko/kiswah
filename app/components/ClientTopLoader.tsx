'use client';

import dynamic from 'next/dynamic';

const NextTopLoader = dynamic(() => import('nextjs-toploader'), { ssr: false });

export default function ClientTopLoader() {
  return (
    <NextTopLoader 
      color="#B48421"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #B48421,0 0 5px #B48421"
    />
  );
}
