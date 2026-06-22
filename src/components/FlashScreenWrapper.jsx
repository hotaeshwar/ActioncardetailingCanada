"use client";

import { useState, useEffect } from 'react';
import actionCarLogo from '../assets/images/action car logo.png';

export default function FlashScreenWrapper({ children }) {
  const [showFlash, setShowFlash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (showFlash) {
    return (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{ background: '#0a0f1a' }}
      >
        <div className="flex flex-col items-center justify-center">
          <img
            src={actionCarLogo}
            alt="Action Car Logo"
            className="w-64 h-64 object-contain mb-6"
          />
          <div className="flex space-x-2">
            <div
              className="w-2.5 h-2.5 rounded-full animate-bounce"
              style={{ background: '#22d3ee', animationDelay: '0ms' }}
            ></div>
            <div
              className="w-2.5 h-2.5 rounded-full animate-bounce"
              style={{ background: '#22d3ee', animationDelay: '150ms' }}
            ></div>
            <div
              className="w-2.5 h-2.5 rounded-full animate-bounce"
              style={{ background: '#22d3ee', animationDelay: '300ms' }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return children;
}
