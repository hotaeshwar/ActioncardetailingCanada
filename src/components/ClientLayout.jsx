"use client";

import { usePathname } from 'next/navigation';
import { HelmetProvider } from 'react-helmet-async';
import CustomScrollbar from './CustomScrollbar';
import Navbar from './Navbar';
import ChatBot from './ChatBot';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isDateBlockingRoute = pathname && pathname.includes('/date-blocking');
  const showNavAndChat = !isDateBlockingRoute;

  return (
    <HelmetProvider>
      <div className="relative">
        <CustomScrollbar />
        {showNavAndChat && <Navbar />}
        {children}
        {showNavAndChat && <ChatBot />}
      </div>
    </HelmetProvider>
  );
}
