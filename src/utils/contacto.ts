// Handler functions for common actions

export const handleWhatsAppClick = (message?: string) => {
  const defaultMessage = message || 'Hola%20Pedrito,%20quiero%20sumarme%20a%20una%20clase,%20me%20pasas%20mas%20info';
  window.open(
    `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE}?text=${defaultMessage}`,
    "_blank"
  );
};

export const handleInstagramClick = () => {
  window.open(`https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME}`, "_blank");
};

export const handleWhatsAppClickCalistenia = () => {
  handleWhatsAppClick('Hola%20Pedrito,%20quiero%20sumarme%20a%20una%20clase%20de%20calistenia');
};
