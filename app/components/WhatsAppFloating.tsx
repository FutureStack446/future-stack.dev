import React from 'react';
import { MessageCircle } from 'lucide-react';
import { personalInfo } from "@/app/lib/data";

const WhatsAppFloating = () => {
  const phoneNumber = personalInfo.phone.replace(/[^0-9]/g, ""); // Ensure only digits are used for the URL
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute right-full mr-3 bg-white text-black px-2 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none shadow-md">
        Chat with me
      </span>
    </a>
  );
};

export default WhatsAppFloating;