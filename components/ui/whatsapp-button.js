// components/ui/whatsapp-button.js
"use client";

import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export default function WhatsAppButton() {
  const phoneNumber = "5511999999999"; // <-- Lembre de trocar pelo seu número
  const message = "Olá! Gostaria de saber mais sobre a Nexora.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // Garanta que o z-index está com um valor alto
      className="fixed bottom-8 right-8 z-[9999] h-16 w-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 ease-in-out"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </Link>
  );
}
