import { handleWhatsAppClick } from '@/utils/contacto';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  children: React.ReactNode;
}

export default function WhatsAppButton({ message, className, children }: WhatsAppButtonProps) {
  return (
    <button
      onClick={() => handleWhatsAppClick(message)}
      className={className}
    >
      {children}
    </button>
  );
}
