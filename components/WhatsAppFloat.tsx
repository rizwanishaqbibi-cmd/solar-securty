"use client";

import { useState, useEffect } from "react";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after a short delay for a nice entrance
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="https://wa.me/923317383800?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20solar%20%26%20security%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-emerald-500/30 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
      style={{ animation: "fadeIn 0.5s ease-out, float 3s ease-in-out infinite, pulseGlow 2.5s ease-in-out infinite 0.5s" }}
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.908-6.993-1.879-1.879-4.356-2.908-6.992-2.91-5.443 0-9.87 4.417-9.873 9.864-.001 1.734.453 3.424 1.316 4.915L1.897 21.03l4.75-1.876z" />
      </svg>
    </a>
  );
}
