import Button from './Button';

export default function DangerButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      className="
        bg-red-600
        hover:bg-red-700
        text-white
        font-semibold
        px-6 py-3
        rounded-lg
        transition-all duration-300
        transform hover:scale-105
        shadow-lg hover:shadow-xl
      "
    >
      {children}
    </Button>
  );
}
