// components/ui/whatsapp-button.js
"use client";

import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export default function WhatsAppButton() {
  const phoneNumber = "+5588992571516";
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
      className=""
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </Link>
  );
}
