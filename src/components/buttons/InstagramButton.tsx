import { handleInstagramClick } from '@/utils/contacto';

interface InstagramButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function InstagramButton({ className, children }: InstagramButtonProps) {
  return (
    <button
      onClick={() => handleInstagramClick()}
      className={className}
    >
      {children}
    </button>
  );
}
