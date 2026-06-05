"use client";

import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  label?: string;
  className?: string;
  disabled?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
  label = "PILIH PAKET",
  className = "",
  disabled = false,
}) => {
  const formattedPhone = phoneNumber.replace(/\+/g, '').replace(/ /g, '');
  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

  const baseStyles = "inline-block text-center font-bold tracking-wider transition-colors duration-200 uppercase text-sm shadow-sm active:scale-[0.98]";
  const activeStyles = "bg-[#B48421] hover:bg-[#BD8A15] text-[#FFFFFF]";
  const disabledStyles = "bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300 pointer-events-none";

  return (
    <a
      href={disabled ? "#" : waUrl}
      target={disabled ? "_self" : "_blank"}
      rel="noopener noreferrer"
      onClick={(e) => disabled && e.preventDefault()}
      className={`${baseStyles} ${disabled ? disabledStyles : activeStyles} ${className}`}
    >
      {label}
    </a>
  );
};

export default WhatsAppButton;
